import { ReactNode, createContext } from "react";

const ProductSendContext = createContext({});

type Props = {
  img?: string;
  price?: number;
  name?: string;
  children?: ReactNode;
  id?: number;
  products?: [];
  onSend?: () => void;
};

export function SendCartProvider({
  img,
  name,
  price,
  children,
  id,
  products,
  onSend,
}: Props) {
  return (
    <ProductSendContext.Provider
      value={{ img, name, price, id, products, onSend }}
    >
      {children}
    </ProductSendContext.Provider>
  );
}
