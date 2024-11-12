import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.scss";
import App from "./App.tsx";
import { LanguageProvider } from "./context/index.tsx";
import Nav from "./components/Nav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <Nav />
      <App />
    </LanguageProvider>
  </StrictMode>
);
