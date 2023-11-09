import React from "react";

type Variants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Props = {
  children: string;
  className?: string;
  variant?: Variants;
};

export function Typography({ className = "", variant, children }: Props) {
  const isHyperLink = children.includes("http");

  if (isHyperLink) {
    return (
      <a
        href={children}
        target="_blank"
        className={`hover:underline hover:decoration-sky-500 hover:text-sky-500 ${className}`}
      >
        {children}
      </a>
    );
  }
  let component;
  switch (variant) {
    case "h1":
      component = <h1 className={`${className}`}>{children}</h1>;
      break;
    case "h2":
      component = <h2 className={`${className}`}>{children}</h2>;
      break;
    case "h3":
      component = <h3 className={`${className}`}>{children}</h3>;
      break;
    case "h4":
      component = <h4 className={`${className}`}>{children}</h4>;
      break;
    case "h5":
      component = <h5 className={`${className}`}>{children}</h5>;
      break;
    case "h6":
      component = <h6 className={`${className}`}>{children}</h6>;
      break;
    case "span":
      component = <span className={`${className}`}>{children}</span>;
      break;
    default:
      component = <p className={`${className}`}>{children}</p>;
  }
  return component;
}
