import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;

  strong {
    font-size: 1rem;
  }

  button {
    background: ${({ theme }) => theme.color.secondary.background};
    padding: 0.8125rem 1.3125rem;
    justify-content: center;
    border: none;
    border-radius: 1.25rem;
    color: ${({ theme }) => theme.color.secondary.contrastTextPrimary};
    font-size: ${({ theme }) => theme.font.lg};
  }
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContainerSubTotalPrice = styled.div`
  display: flex;
  align-items: center;
`;
