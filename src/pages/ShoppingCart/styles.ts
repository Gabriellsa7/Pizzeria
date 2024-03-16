import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const TextIconContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  button {
    padding: 0;
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2.0625rem 2rem;
  margin: 3.4375rem;
  border: 0.5625rem solid
    ${({ theme }) => theme.color.secondary.contrastTextSecondary};
  /* height: 80%; */
`;
