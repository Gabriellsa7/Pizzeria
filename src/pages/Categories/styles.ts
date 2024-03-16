import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 28.375rem; */
  width: 100%;
  padding: 1.2rem 0;

  button {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background-color: transparent;
    padding: 0;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
`;
