import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
  padding: 0.625rem 2.1875rem;
`;

export const TotalPurchasePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const SectionItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonQtdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: ${({ theme }) => theme.color.primary.buttons};
    padding: 20px 30px;
    border: none;
    border-radius: 1.25rem;
    color: ${({ theme }) => theme.color.secondary.contrastTextPrimary};

    &:hover {
      cursor: pointer;
      background-color: #e23400;
    }
  }
`;

export const ContainerQtd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .icon {
    &:hover {
      cursor: pointer;
    }
  }
`;
