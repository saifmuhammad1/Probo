import { Routes, Route } from "react-router-dom";
import { useAppConfig } from "./context/appConfigContext";
import { ConfigPage } from "./pages/configPages";

export const AppRouter = () => {
  const { pages } = useAppConfig();

  return (
    <Routes>
      {Object.entries(pages).map(([key, page]: any) => (
        <Route
          key={key}
          path={page.path}
          element={<ConfigPage pageKey={key} />}
        />
      ))}
    </Routes>
  );
};
