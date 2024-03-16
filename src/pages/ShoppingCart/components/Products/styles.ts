import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  /* gap: 7.0625rem; */
`;

export const ContainerImgName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  max-width: 15.3125rem;

  img {
    width: 7.5rem;
  }
`;

export const ProductQtd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  button {
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;
