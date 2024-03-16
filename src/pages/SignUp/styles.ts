import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.backgroundImage};
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 34px;
  }
`;

export const TopText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2em;
  width: 100%;

  p {
    text-decoration-line: underline;

    &:hover {
      color: #1f1f1f;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .button {
    padding: 1.5em 6em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.div`
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const ImgIcons = styled.img`
  width: 20px;
`;
