import { useState } from "react";
import { Text } from "../../../../components/Text";
import * as S from "./styles";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  products,
  IoMdCloseCircleOutline,
} from "./mocks/index.tsx";
import { useTheme } from "styled-components";
import { SendCartProvider } from "../../../../components/context/productsSendContext";

export default function Products() {
  const theme = useTheme();

  const [productsQtd, setProductsQtd] = useState(products.map(() => 1));
  // const [productsQtd, setProductsQtd] = useState({});

  const handleIncrement = (index: number) => {
    setProductsQtd((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };
  const handleDecrement = (index: number) => {
    setProductsQtd((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] - 1);
      return newQuantities;
    });
  };

  return (
    <S.Container>
      {products.map(({ img, name, price, id }) => (
        <SendCartProvider img={img} name={name} price={price} id={id}>
          <S.Products key={id}>
            <S.ContainerImgName>
              <img src={img} alt="" />
              <Text
                as="p"
                fontSize="default"
                color={theme.color.secondary.contrastTextSecondary}
              >
                {name}
              </Text>
            </S.ContainerImgName>
            <S.ProductQtd>
              <button onClick={() => handleIncrement(id)}>
                <MdKeyboardArrowUp size="1.6875rem" color="#777777" />
              </button>
              <Text as="p" color={theme.color.secondary.contrastTextSecondary}>
                {productsQtd[id]}
              </Text>
              <button onClick={() => handleDecrement(id)}>
                <MdKeyboardArrowDown size="1.6875rem" color="#777777" />
              </button>
            </S.ProductQtd>
            <Text as="p" color={theme.color.secondary.contrastTextSecondary}>
              R${price}
            </Text>
            <Text as="p" color={theme.color.secondary.contrastTextSecondary}>
              R${price * productsQtd[id]}
            </Text>
            <IoMdCloseCircleOutline color="#777" size="2.125rem" />
          </S.Products>
        </SendCartProvider>
      ))}
    </S.Container>
  );
}
