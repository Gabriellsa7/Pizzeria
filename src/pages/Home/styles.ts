import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};

  .img_card_top {
    width: 7rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  img {
    width: 6rem;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerButtonSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.3125rem 0 0.625rem;
  position: absolute;
`;

export const SearchButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchIcon = styled.img`
  width: 2.625rem;
`;

export const InputSearch = styled.input`
  border-radius: 1.25rem;
  background: ${(props) => props.theme.inputs.background};
  padding: 0.9375rem 4.375rem;
  border: none;
  outline: none;

  &:hover {
    background: #c8c8c8;
  }
`;

export const ViewAll = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background: transparent;
    padding: 0;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Cards = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerCard = styled.div`
  padding: 0 2.8125rem;
`;

export const Top = styled.div`
  width: 230px;
`;

export const Bottom = styled.div`
  width: 230px;
`;
