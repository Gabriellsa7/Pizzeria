import styled from "styled-components";

export const Container = styled.form``;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

export const Label = styled.label`
  color: #000;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.secondary.contrastTextPrimary};
`;

export const Input = styled.input`
  display: flex;
  // justify-content: flex-start;
  padding: 1.5em 12em 1.5em 3em;
  border-radius: 20px;
  border: 1px solid black;
  background: ${(props) => props.theme.inputs.background};
  text-indent: 1px;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.inputs.hover.background};
  }
`;
