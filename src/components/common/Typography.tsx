import { ReactNode } from "react";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  children: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const Typography = (props: TypographyProps) => {
  const { as = "p", children, className = "", title, onClick } = props;
  const Tag = as;

  const tagClasses = {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
    p: "",
    span: "",
    label: "",
  };

  const specificClasses = tagClasses[as];

  return (
    <Tag
      className={`${specificClasses} ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
