import { ComponentResolver } from "../resolver/componentResolver";

export const PageRenderer = ({ sections }: any) => {
  return (
    <>
      {sections.map((section: any, index: number) => (
        <ComponentResolver key={index} {...section} />
      ))}
    </>
  );
};
