import * as S from "./styles";
import { Button, logo2 } from "./mocks";
import { LeftSection, RightSection } from "../../components/Section";
import { Text } from "../../components/Text";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

export default function InitialPage() {
  const theme = useTheme();

  return (
    <S.Container>
      <LeftSection>
        <S.ContainerText>
          <Text
            color={theme.color.secondary.contrastTextPrimary}
            as="h1"
            fontSize="xx"
          >
            Welcome to
            <strong> Boruto Pizzaria</strong>
          </Text>
        </S.ContainerText>
        <img src={logo2} alt="pizzeria logo" />
      </LeftSection>
      <RightSection>
        <S.ContainerText>
          <Text
            color={theme.color.secondary.contrastTextPrimary}
            as="h1"
            fontSize="xx"
          >
            Welcome to
            <strong> Boruto Pizzaria</strong>
          </Text>
          <Text as="p">sign in now or sign up.</Text>
        </S.ContainerText>
        <S.ButtonContainer>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button className="button_register">Register</Button>
          </Link>
        </S.ButtonContainer>
      </RightSection>
    </S.Container>
  );
}
