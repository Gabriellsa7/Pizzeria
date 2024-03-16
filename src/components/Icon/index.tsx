import { ReactNode } from "react";
import { ContainerIcons } from "./styles";

interface PropsIcons {
  children: ReactNode;
}

export default function Icons({ children }: PropsIcons) {
  return <ContainerIcons>{children}</ContainerIcons>;
}
