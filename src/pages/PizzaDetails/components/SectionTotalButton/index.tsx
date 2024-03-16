import * as S from "./styles";
import { Text } from "../../../../components/Text";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import line from "../../../../assets/icons/LineTotalButton.png";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SendCartProvider } from "../../../../components/context/productsSendContext";

interface Props {
  priceSend?: string;
}

export default function SectionTotalButton({ priceSend }: Props) {
  const theme = useTheme();

  const location = useLocation();
  const [price, setPrice] = useState(0);
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (location.state && location.state.price) {
      setPrice(location.state.price);
    }
  }, [location.state]);

  const handleClickIncrease = () => {
    setNum(num + 1);
  };

  const handleClickDecrease = () => {
    const i = Math.max(1, num - 1);
    setNum(i);
  };

  const handleSendCard = () => {
    <SendCartProvider onSend={handleSendCard} />;
  };

  return (
    <S.Container>
      <S.TotalPurchasePrice>
        <Text>Total: </Text>
        <S.SectionItems>
          <Text>Products: </Text>
          <Text>R${Number((price * num).toFixed(2))}</Text>
        </S.SectionItems>
        <img src={line} />
        <S.SectionItems>
          <Text>Options:</Text>
          {priceSend}
          {/* <Text>{`${Number(priceSend + num)}`}</Text> */}
        </S.SectionItems>
        <img src={line} />
        <S.SectionItems>
          <Text>Total: </Text>
          {priceSend !== undefined && !isNaN(Number(priceSend))
            ? `R$${Number((price * num + parseFloat(priceSend)).toFixed(2))}`
            : "Preço indisponível"}
        </S.SectionItems>
        <img src={line} />
      </S.TotalPurchasePrice>
      <S.ButtonQtdContainer>
        <S.ContainerQtd>
          <FiMinus
            className="icon"
            size="1.875rem"
            color={theme.color.secondary.contrastTextSecondary}
            onClick={handleClickDecrease}
          />
          <Text as="p">{num}</Text>
          <FiPlus
            className="icon"
            size="1.875rem"
            color={theme.color.secondary.contrastTextSecondary}
            onClick={handleClickIncrease}
          />
        </S.ContainerQtd>
        <button onClick={handleSendCard}>
          <Text as="p" color={theme.color.secondary.contrastTextPrimary}>
            Add:
          </Text>
          <Text as="span" color={theme.color.secondary.contrastTextPrimary}>
            R${Number((price * num).toFixed(2))}
          </Text>
        </button>
      </S.ButtonQtdContainer>
    </S.Container>
  );
}
