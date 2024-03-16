import styled from "styled-components";

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.625rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondary.backgroundLeft};
  position: relative;
`;
