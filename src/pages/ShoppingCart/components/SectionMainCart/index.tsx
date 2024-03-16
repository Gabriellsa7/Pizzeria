import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import * as S from "./styles";
import Products from "../Products";

export default function SectionMainCart() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.TextContainer>
        <Text
          as="h2"
          fontSize="xl"
          fontWeight="bold"
          color={theme.color.secondary.contrastTextSecondary}
        >
          Product Description
        </Text>
        <Text
          as="h2"
          fontSize="xl"
          fontWeight="bold"
          color={theme.color.secondary.contrastTextSecondary}
        >
          Quantity
        </Text>
        <Text
          as="h2"
          fontSize="xl"
          fontWeight="bold"
          color={theme.color.secondary.contrastTextSecondary}
        >
          Price
        </Text>
        <Text
          as="h2"
          fontSize="xl"
          fontWeight="bold"
          color={theme.color.secondary.contrastTextSecondary}
        >
          SubTotal
        </Text>
        <div></div>
      </S.TextContainer>
      <Products />
    </S.Container>
  );
}
