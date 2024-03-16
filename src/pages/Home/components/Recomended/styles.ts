import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 3em;
  gap: 50px;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 134px;
  align-items: center;
  margin: 10px 50px;
  /* flex: 3; */
  flex-wrap: wrap;
  margin-bottom: 40px;

  /* .top {
    min-width: 210px;
    img {
      border-radius: 10px;
      width: 210px;
      height: 150px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    min-width: 210px;
    min-height: 146px;
  } */
`;

export const ContainerTextIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2px;

  img {
    width: 30px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 13.125rem;
  max-height: 19.375rem;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const TopCard = styled.div`
  min-width: 13.125rem;

  img {
    border-radius: 10px;
    width: 13.125rem;
    height: 9.375rem;
  }
`;

export const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 13.125rem;
  min-height: 9.125rem;
`;

export const ButtonAdd = styled.button`
  padding: 1em 4.5em;
  border-radius: 1.25rem;
  border: none;
  background-color: #e65200;
  color: #fff;
  font-weight: 600;
  font-size: 0.88rem;

  &:hover {
    cursor: pointer;
    background-color: #e56018;
  }
`;
