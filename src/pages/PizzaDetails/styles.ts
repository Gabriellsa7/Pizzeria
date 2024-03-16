import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SectionTop = styled.section`
  display: flex;
  width: 100%;
  padding: 2.1875rem 3rem;
  gap: 3.125rem;
`;

export const CardImageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  /* border: 2px solid
    ${({ theme }) => theme.color.secondary.contrastTextSecondary}; */

  img {
    width: 15.625rem;
    border-radius: 1.25rem;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SectionBottom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  padding: 2.1875rem 3rem;
`;

export const TextRequire = styled.div``;
