import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/index.scss";
import { AppHeader } from "./components/AppHeader/AppHeader.tsx";
import { AppFooter } from "./components/AppFooter/AppFooter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppHeader />
    <App />
    <AppFooter />
  </StrictMode>,
);
