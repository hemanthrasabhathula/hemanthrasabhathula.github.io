import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioConfig } from "./types";
import axios from "axios";
import { FILE_NAME, GIST_ID, GITHUB_GIST_BASE_URL } from "./constants";

interface PortfolioState {
  config: PortfolioConfig | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

const initialState: PortfolioState = {
  config: null,
  loading: false,
  error: null,
  initialized: false,
};

export const fetchPortfolioConfig = createAsyncThunk(
  "portfolio/fetchConfig",
  async (_, { rejectWithValue }) => {
    try {
      // const response = await axios.get<PortfolioConfig>(API_URL);
      const response = await axios.get(`${GITHUB_GIST_BASE_URL}${GIST_ID}`);
      if (response.status !== 200) {
        return rejectWithValue("Failed to fetch portfolio config");
      }
      if (!response.data.files || !response.data.files[FILE_NAME]) {
        return rejectWithValue("Config file not found in the gist");
      }
      const fileContent = response.data.files[FILE_NAME].content;
      const parsedData = JSON.parse(fileContent);
      return parsedData as PortfolioConfig;
    } catch (error) {
      // console.error("Error fetching portfolio config:", error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.message || "Failed to fetch portfolio config"
        );
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateSectionEnabled: (
      state,
      action: PayloadAction<{
        section: keyof PortfolioConfig["sections"];
        enabled: boolean;
      }>
    ) => {
      if (state.config) {
        state.config.sections[action.payload.section].enabled =
          action.payload.enabled;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.config = action.payload;
        state.initialized = true;
        state.error = null;
      })
      .addCase(fetchPortfolioConfig.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Failed to fetch portfolio config";
        state.initialized = true;
      });
  },
});

export const { updateSectionEnabled } = portfolioSlice.actions;

export default portfolioSlice.reducer;
