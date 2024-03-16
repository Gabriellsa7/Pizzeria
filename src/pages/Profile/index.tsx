import Header from "../../components/Header";
import * as S from "./styles";
import * as I from "./mocks";
import { Text } from "../../components/Text";
import MyAccount from "./components/MyAccounts";
import Settings from "./components/Settings";
import User from "./components/User";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Esta função retorna para a página anterior
  };

  return (
    <S.Container>
      <Header padding="0.5rem">
        <S.TextIconHeader>
          <I.CgProfile size="2.5rem" color="#FFF" />
          <Text
            color={theme.color.secondary.contrastTextPrimary}
            fontSize="xl"
            fontWeight="bold"
            as="h2"
          >
            Profile
          </Text>
        </S.TextIconHeader>
        <S.TextIconHeader>
          <button onClick={handleClick}>
            <I.FaArrowLeftLong size="1.5rem" color="#FFF" />
            <Text
              color={theme.color.secondary.contrastTextPrimary}
              fontSize="lg"
              fontWeight="bold"
              as="h5"
            >
              Back
            </Text>
          </button>
        </S.TextIconHeader>
      </Header>
      <User />
      <S.Main>
        <MyAccount />
        <Settings />
      </S.Main>
    </S.Container>
  );
}
