import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.backgroundImage};
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  .button_register {
    padding: 1.5em 8em;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 1.25rem;

  strong {
    font-size: 1.875rem;
  }
`;
