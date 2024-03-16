import { Text } from "../../../../components/Text";
import * as S from "./styles";
import { items, IoIosArrowForward, line } from "./mocks";
import { useTheme } from "styled-components";

export default function MyAccount() {
  const theme = useTheme();

  return (
    <S.Container>
      <Text
        as="h2"
        color={theme.color.secondary.contrastTextSecondary}
        fontWeight="bold"
        fontSize="xl"
      >
        My Account
      </Text>
      {items.map(({ img: Icon, name }, index) => (
        <S.sectionContainer>
          <S.Section key={index}>
            <S.IconTextContainer>
              {Icon && <Icon size="2rem" color="#777777" />}
              <Text
                as="h3"
                color={theme.color.secondary.contrastTextSecondary}
                fontSize="xl"
              >
                {name}
              </Text>
            </S.IconTextContainer>
            <IoIosArrowForward size="3rem" color="#777777" />
          </S.Section>
          <img src={line} alt="" />
        </S.sectionContainer>
      ))}
    </S.Container>
  );
}
