import { useAppConfig } from "../context/appConfigContext";

export const usePageConfig = (pageKey: string) => {
  const { pages } = useAppConfig();
  return pages[pageKey];
};
