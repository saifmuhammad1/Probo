import { PageRenderer } from "../components/layout/pageRenderer";
import { usePageConfig } from "../hooks/usePageConfig";

export const ConfigPage = ({ pageKey }: { pageKey: string }) => {
  const page = usePageConfig(pageKey);
  return <PageRenderer sections={page.sections} />;
};
