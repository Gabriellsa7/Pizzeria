import * as S from "./styles";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
export default function SectionPriceSubTotal() {
  const theme = useTheme();

  return (
    <S.Container>
      <Text
        as="p"
        fontWeight="medium"
        color={theme.color.secondary.contrastTextSecondary}
      >
        Frete Total: <strong>R$ 8,00</strong>
      </Text>
      <S.ButtonTextContainer>
        <S.ContainerSubTotalPrice>
          <Text
            as="p"
            fontWeight="medium"
            color={theme.color.secondary.contrastTextSecondary}
          >
            SubTotal:
          </Text>
          <Text as="span" color={theme.color.secondary.contrastTextSecondary}>
            <strong>59.99</strong>
          </Text>
        </S.ContainerSubTotalPrice>
        <button>Finalizar Compra</button>
      </S.ButtonTextContainer>
    </S.Container>
  );
}
