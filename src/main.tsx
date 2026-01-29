import { createRoot } from "react-dom/client";
import "./index.css";
import { AppConfigProvider } from "./context/appConfigContext";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./App";

createRoot(document.getElementById("root")!).render(
  <AppConfigProvider>
    <BrowserRouter basename="/Probo/">
      <AppRouter />
    </BrowserRouter>
  </AppConfigProvider>,
);
