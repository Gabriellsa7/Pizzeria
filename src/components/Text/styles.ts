import styled from "styled-components";
import "./index";
import { TextProps } from "./index";

export const TextStyle = styled.span<TextProps>`
  color: ${({ theme, color }) => color || theme.color.primary.contrastText};
  font-size: ${({ theme, fontSize }) => theme.font[fontSize || "default"]};
  font-weight: ${({ theme, fontWeight }) =>
    theme.font.weight[fontWeight || "medium"]};
`;
