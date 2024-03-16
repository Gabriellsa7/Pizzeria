import Header from "../../components/Header";
import * as S from "./styles";
import { IoCart } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTheme } from "styled-components";
import { Text } from "../../components/Text";
import { useNavigate } from "react-router-dom";
import SectionMainCart from "./components/SectionMainCart";
import SectionPriceSubTotal from "./components/SectionPriceSubTotal";

export default function ShoppingCart() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Esta função retorna para a página anterior
  };

  return (
    <S.Container>
      <Header padding="1.5rem">
        <IoCart size="3rem" color={theme.color.secondary.contrastTextPrimary} />
        <S.TextIconContainerHeader>
          <button onClick={handleClick}>
            <FaArrowLeftLong
              size="1.5rem"
              color={theme.color.secondary.contrastTextPrimary}
            />
            <Text
              as="h2"
              fontSize="lg"
              fontWeight="bold"
              color={theme.color.secondary.contrastTextPrimary}
            >
              Back
            </Text>
          </button>
        </S.TextIconContainerHeader>
      </Header>
      <S.Main>
        <Text
          as="h1"
          fontSize="xx"
          fontWeight="bold"
          color={theme.color.secondary.contrastTextSecondary}
        >
          Product Cart
        </Text>
        <SectionMainCart />
        <SectionPriceSubTotal />
      </S.Main>
    </S.Container>
  );
}
