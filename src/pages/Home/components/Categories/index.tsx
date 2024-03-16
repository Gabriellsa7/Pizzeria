import { ReactNode } from "react";
import * as S from "./styles";

interface Props {
  children: ReactNode;
  child?: string;
}

export function ContainerCategories({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
export function HeaderCategories({ children }: Props) {
  return <S.Header>{children}</S.Header>;
}
export function FooterCategories({ children }: Props) {
  return <S.Footer>{children}</S.Footer>;
}
