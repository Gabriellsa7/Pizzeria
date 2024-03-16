import { ReactNode } from "react";
import * as S from "./styles";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return <S.Container className={className}>{children}</S.Container>;
}
export function Top({ children, className }: Props) {
  return <S.Top className={className}>{children}</S.Top>;
}
export function Bottom({ children, className }: Props) {
  return <S.Bottom className={className}>{children}</S.Bottom>;
}
