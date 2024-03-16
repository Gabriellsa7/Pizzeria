import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background};
  height: 100vh;
`;

export const TextIconHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.25rem 1.25rem;

  .profile_icon {
    width: 2.5rem;
  }

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

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  gap: 11.3125rem;
  margin: 0 0 3rem;
  align-items: center;
  width: 100%;
`;
