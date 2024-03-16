import styled from "styled-components";

export const Container = styled.section``;

export const requiredContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary.background};
  padding: 0.625rem 2.1875rem;
  gap: 3rem;
  border-radius: 1.25rem;
  width: 500px;
`;

export const TextRequiredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const Required = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 56px;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.secondary.background};
`;
