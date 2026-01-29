import React, { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white border rounded-lg shadow-sm hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardHeader = ({ children }: { children: ReactNode }) => (
  <div className="p-4 border-b font-semibold text-lg">{children}</div>
);

export const CardBody = ({ children }: { children: ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const CardFooter = ({ children }: { children: ReactNode }) => (
  <div className="p-4 border-t">{children}</div>
);
