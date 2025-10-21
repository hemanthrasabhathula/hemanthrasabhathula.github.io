import { createSlice } from "@reduxjs/toolkit";
import { SECTION } from "../../lib/constants/constants";

interface NavState {
  activeSection: string;
}
const initialState: NavState = {
  activeSection: SECTION.HOME,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = navSlice.actions;
export default navSlice.reducer;
