import { createContext, useContext } from "react";
import { appConfig } from "../configs/appConfig";

const AppConfigContext = createContext(appConfig);

export const AppConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AppConfigContext.Provider value={appConfig}>
    {children}
  </AppConfigContext.Provider>
);

export const useAppConfig = () => useContext(AppConfigContext);
