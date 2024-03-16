import { ReactNode } from "react";
import { HeaderContainer } from "./styles";

export type Props = {
  children: ReactNode;
  padding?: string;
};

export default function Header({ children, padding }: Props) {
  return <HeaderContainer padding={padding}>{children}</HeaderContainer>;
}
