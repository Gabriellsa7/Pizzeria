import * as S from "./styles";
import { types } from "./mocks";
import * as Card from "../../../../components/Card";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";

export default function SectionCategories() {
  const theme = useTheme();

  return (
    <S.Container>
      {types.map(({ name, img }) => (
        <Card.Container key={name}>
          <Card.Top>
            <img className="img_card_top" src={img} alt={name} />
          </Card.Top>
          <Card.Bottom>
            <Text
              color={theme.color.secondary.contrastTextSecondary}
              fontSize="lg"
              as="h4"
              fontWeight="bold"
            >
              {name}
            </Text>
          </Card.Bottom>
        </Card.Container>
      ))}
    </S.Container>
  );
}
