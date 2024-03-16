import * as S from "./styles";
import { FaArrowLeftLong, Header, Text } from "./mocks";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import SectionTypesPizza from "./components/SectionTypesPizza";
// import SectionTotalButton from "./components/SectionTotalButton";
import Types from "./components/SectionTypesPizza/components/Types";
// import { SendCartProvider } from "../../components/context/productsSendContext";
// import { types } from "../Home/components/Recomended/mocks";
import { useState } from "react";

interface Props {
  id: number;
  name: string;
  img: string;
  price: number;
}

interface IShoppingCart {
  product: Props;
  quantity: number;
}

export default function PizzaDetails() {
  const navigate = useNavigate();

  const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([]);

  const handleClick = () => {
    navigate("/home"); // Esta função retorna para a página anterior
  };

  const theme = useTheme();

  const location = useLocation();
  const { img, name, price } = location.state;

  const onSend = (id: number) => {
    // const productsSend = types.find((product) => product.id === id);
    const alreadyInShoppingCart = shoppingCart.find((i) => i.product.id === id);

    if (alreadyInShoppingCart) {
      const newShoppingCart = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    // const cartItem: IShoppingCart = {
    //   // product: productsSend,
    //   quantity: 1,
    // };

    //   const newShoppingCart: IShoppingCart[] = [...shoppingCart, cartItem];
    //   setShoppingCart(newShoppingCart);
  };

  return (
    <S.Container>
      <Header>
        <S.HeaderContainer>
          <button onClick={handleClick}>
            <FaArrowLeftLong
              color={theme.color.secondary.contrastTextPrimary}
              size="1.25rem"
            />
            <Text
              color={theme.color.secondary.contrastTextPrimary}
              as="p"
              fontSize="lg"
            >
              Back
            </Text>
          </button>
          <S.TextWrapper>
            <Text
              color={theme.color.secondary.contrastTextPrimary}
              fontSize="xx"
              as="h1"
              fontWeight="bold"
            >
              Item Details
            </Text>
          </S.TextWrapper>
        </S.HeaderContainer>
      </Header>
      <S.SectionTop>
        <S.CardImageTitle>
          <img src={img} alt="" />
          <Text as="p" color={theme.color.secondary.contrastTextSecondary}>
            {name}
          </Text>
          <Text as="span" color={theme.color.secondary.contrastTextSecondary}>
            {price}
          </Text>
        </S.CardImageTitle>
        <S.Information>
          <Text
            as="h2"
            fontWeight="bold"
            fontSize="xl"
            color={theme.color.secondary.contrastTextSecondary}
          >
            Description
          </Text>
          <Text as="p" color={theme.color.primary.contrastText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborumtest.
          </Text>
        </S.Information>
      </S.SectionTop>
      <S.SectionBottom>
        <SectionTypesPizza />
        <Types />
        {/* <SendCartProvider onSend={() => onSend(id)} /> */}
        {/* <SectionTotalButton /> */}
      </S.SectionBottom>
    </S.Container>
  );
}
