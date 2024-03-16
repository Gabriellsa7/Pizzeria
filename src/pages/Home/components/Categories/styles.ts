import styled from "styled-components";

export const Container = styled.div`
  margin: 3em 26px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 14px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 14px;
  overflow-x: auto;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 0;
  }
`;
