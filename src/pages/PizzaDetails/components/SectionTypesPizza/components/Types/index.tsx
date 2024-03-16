import * as S from "./styles";
import { FaCheckCircle, FaCircle, items } from "./mocks";
import { Text } from "../../../../../../components/Text";
import { useTheme } from "styled-components";
import { useState } from "react";
import SectionTotalButton from "../../../SectionTotalButton";

interface CheckedItem {
  checked: boolean;
  price?: string;
}

export default function Types() {
  const theme = useTheme();

  const [isChecked, setIsChecked] = useState<Array<CheckedItem>>(
    items.map((i) => ({ checked: false, price: i.price }))
  );

  const [selectedPrice, setSelectedPrice] = useState<string | undefined>(
    undefined
  );

  const handleMarck = (i: number) => {
    setIsChecked((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[i] = {
        ...updatedChecked[i],
        checked: !updatedChecked[i].checked,
      };
      if (updatedChecked[i].checked) {
        setSelectedPrice(updatedChecked[i].price);
      } else {
        setSelectedPrice(undefined); // Se o item estiver desmarcado, defina o preço como undefined
      }

      // handleSendPriceToComponent();

      return updatedChecked;
    });
  };

  return (
    <S.Container>
      <S.ContainerItems>
        {items.map(({ name, price }, i) => (
          <S.SectionItems key={i}>
            <Text
              as="h2"
              color={theme.color.primary.contrastText}
              fontSize="lg"
            >
              {name}
            </Text>
            <S.PriceIcon>
              <Text as="span" color="#00a519" fontWeight="bold">
                {price}
              </Text>
              {isChecked[i].checked ? (
                <FaCheckCircle
                  color="#E65200"
                  size="1.8rem"
                  onClick={() => handleMarck(i)}
                />
              ) : (
                <FaCircle
                  color="#E65200"
                  size="1.8rem"
                  onClick={() => handleMarck(i)}
                />
              )}
            </S.PriceIcon>
          </S.SectionItems>
        ))}
      </S.ContainerItems>
      <SectionTotalButton priceSend={selectedPrice} />
    </S.Container>
  );
}
