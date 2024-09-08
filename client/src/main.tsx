import React from "react"; // اضافه کردن React برای JSX
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // وارد کردن App بدون پسوند .tsx
import "./index.css"; // وارد کردن استایل‌ها

// اطمینان از وجود عنصر با id 'root'
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}
