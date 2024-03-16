// import * as Card from "../../components/Card";

import {
  ContainerCategories,
  FooterCategories,
  HeaderCategories,
} from "./components/Categories";

import * as I from "./mocks";
import * as S from "./styles";
import Recommended from "./components/Recomended";
import { Text } from "../../components/Text";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Icons from "../../components/Icon";
import { useTheme } from "styled-components";
import logo2 from "../../assets/Logo2.png";

export default function Home() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/categories"); // Esta função retorna para a página anterior
  };

  return (
    <S.Container>
      <Header>
        <S.LogoContainer>
          <img src={logo2} alt="" />
          <Text
            color={theme.color.secondary.contrastTextPrimary}
            as="h1"
            fontSize="xx"
          >
            Welcome to
            <br />
            <strong> Boruto Pizzeria</strong>
          </Text>
        </S.LogoContainer>
        <S.ContainerSearch>
          <S.ContainerButtonSearch>
            <S.SearchButton>
              <I.GoSearch size="2rem" color="#222222" />
            </S.SearchButton>
          </S.ContainerButtonSearch>
          <S.InputSearch type="text" placeholder="Search" />
        </S.ContainerSearch>
        <Icons>
          <Link to="/profile">
            <I.CgProfile size="3rem" color="#FFF" />
          </Link>
          <Link to="/shoppingcart">
            <I.IoCart size="3rem" color="#FFF" />
          </Link>
        </Icons>
      </Header>
      <ContainerCategories>
        <HeaderCategories>
          <Text
            as="h1"
            color={theme.color.secondary.contrastTextSecondary}
            fontSize="xl"
            fontWeight="bold"
          >
            Categories
          </Text>
          <S.ViewAll>
            <button onClick={handleClick}>
              <Text
                as="p"
                color={theme.color.secondary.contrastTextSecondary}
                fontWeight="medium"
              >
                View all
              </Text>
              <I.FaArrowRightLong size="1.3rem" color="#E65200" />
            </button>
          </S.ViewAll>
        </HeaderCategories>
        <FooterCategories>
          {I.categories.map(({ img, name }) => (
            <S.ContainerCard key={name}>
              <S.Top>
                <img className="img_card_top" src={img} alt={name} />
              </S.Top>
              <S.Bottom>
                <Text
                  as="h4"
                  color={theme.color.secondary.contrastTextSecondary}
                >
                  {name}
                </Text>
              </S.Bottom>
            </S.ContainerCard>
          ))}
        </FooterCategories>
      </ContainerCategories>
      <Recommended />
    </S.Container>
  );
}
