import { Text } from "../../components/Text";
import Header from "../../components/Header";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { FaArrowLeftLong } from "./mocks";
import SectionCategories from "./components/SectionCategories";
import { useNavigate } from "react-router-dom";

export function Categories() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Esta função retorna para a página anterior
  };

  const theme = useTheme();

  return (
    <S.Container>
      <Header>
        <S.HeaderContainer>
          {/* <S.HeaderContainerIconText> */}
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
          {/* </S.HeaderContainerIconText> */}
          <S.TextWrapper>
            <Text
              color={theme.color.secondary.contrastTextPrimary}
              fontSize="xx"
              as="h1"
              fontWeight="bold"
            >
              Categories
            </Text>
          </S.TextWrapper>
        </S.HeaderContainer>
      </Header>
      <S.Main>
        <SectionCategories />
      </S.Main>
    </S.Container>
  );
}
