import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import * as S from "./styles";
// import Types from "./components/Types";

export default function SectionTypesPizza() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.requiredContainer>
        <S.TextRequiredContainer>
          <Text
            as="h2"
            fontSize="xl"
            fontWeight="bold"
            color={theme.color.secondary.contrastTextPrimary}
          >
            Border:
          </Text>
          <Text as="p" color={theme.color.secondary.contrastTextPrimary}>
            select an option
          </Text>
        </S.TextRequiredContainer>
        <S.Required>
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="lg"
            color={theme.color.secondary.contrastTextPrimary}
          >
            REQUIRED *
          </Text>
        </S.Required>
      </S.requiredContainer>
      {/* <Types /> */}
    </S.Container>
  );
}
