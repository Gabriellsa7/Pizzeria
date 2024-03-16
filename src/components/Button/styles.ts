import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  flex: 1;
  padding: ${(props) => props.theme.buttons.padding};
  border: ${(props) => props.theme.border.style};
  border-radius: ${(props) => props.theme.border.radius};
  background-color: #d9d9d9;
  transition: 0.5s;
  width: 100%;

  p {
    font-size: ${(props) => props.theme.buttons.text.size};
    font-weight: ${(props) => props.theme.buttons.text.weight};
  }

  &:hover {
    cursor: ${(props) => props.theme.buttons.hover.cursor};
    background-color: ${(props) => props.theme.buttons.hover.background};
  }
`;
