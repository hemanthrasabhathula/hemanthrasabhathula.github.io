// src/declaration.d.ts

import React from "react";

// This file is NOT a module, it declares globals
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        trigger?: string;
        delay?: string;
        stroke?: string;
        colors?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

// 👇 This line is CRITICAL to make sure it's treated as a global file, NOT a module
export {};
