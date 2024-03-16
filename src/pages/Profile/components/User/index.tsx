import { Text } from "../../../../components/Text";
import * as S from "./styles";
import user from "../../../../assets/profileImg/user.svg";
import { useTheme } from "styled-components";

export default function User() {
  const theme = useTheme();

  return (
    <S.Container>
      <img src={user} alt="User Image" />
      <Text
        color={theme.color.secondary.contrastTextSecondary}
        as="h2"
        fontSize="xl"
      >
        Uzumaki Boruto
      </Text>
    </S.Container>
  );
}
