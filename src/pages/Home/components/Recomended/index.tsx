import { types, FaShoppingBasket } from "./mocks";
// import * as Card from "../../../components/Card";

import * as S from "./styles";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Recommended() {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <S.Container>
      <Text
        as="h1"
        color={theme.color.secondary.contrastTextSecondary}
        fontSize="xl"
        fontWeight="bold"
      >
        Recommended For you
      </Text>
      <S.Section>
        {types.map(({ img, name, price }) => (
          <div
            onClick={() =>
              navigate("/pizzaDetails", { state: { img, name, price } })
            }
          >
            <S.ContainerCard>
              <S.TopCard>
                <img className="img_pizzas" src={img} alt="" />
              </S.TopCard>
              <S.BottomCard>
                <Text
                  as="h4"
                  color={theme.color.secondary.contrastTextSecondary}
                >
                  {name}
                </Text>
                <S.ContainerTextIcon>
                  <Text
                    as="span"
                    color={theme.color.secondary.contrastTextSecondary}
                  >
                    R${price}
                  </Text>
                  <FaShoppingBasket color="#E65200" size="1.5rem" />
                </S.ContainerTextIcon>
                <S.ButtonAdd>See Details</S.ButtonAdd>
              </S.BottomCard>
            </S.ContainerCard>
          </div>
        ))}
      </S.Section>
    </S.Container>
  );
}
