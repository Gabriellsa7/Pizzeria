import styled from "styled-components";
import { Props } from ".";

export const HeaderContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.secondary.background};
  width: 100%;
  position: relative;
  padding: ${({ padding }) => padding || "0.625rem 1.25rem"};
`;
