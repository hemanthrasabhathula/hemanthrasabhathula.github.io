import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
