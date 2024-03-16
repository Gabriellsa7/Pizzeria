import { ReactNode } from "react";
import * as S from "./styles";

interface Props {
  children: ReactNode;
}

export function LeftSection({ children }: Props) {
  return <S.LeftSection>{children}</S.LeftSection>;
}
export function RightSection({ children }: Props) {
  return <S.RightSection>{children}</S.RightSection>;
}
