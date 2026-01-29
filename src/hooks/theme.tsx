import { useAppConfig } from "../context/appConfigContext";

export const useTheme = () => {
  const { theme } = useAppConfig();

  return {
    styles: {
      color: theme.primaryColor,
      padding: theme.spacing,
    },
  };
};
