import { ReactNode } from "react";

import { TextStyle } from "./styles";

export type TextProps = {
  children: ReactNode;
  as?: string;
  color?: string;
  fontSize?: "xs" | "sm" | "default" | "lg" | "xl" | "xx";
  fontWeight?: "light" | "regular" | "medium" | "bold";
};

export const Text = ({ children, ...rest }: TextProps) => {
  return <TextStyle {...rest}>{children}</TextStyle>;
};
