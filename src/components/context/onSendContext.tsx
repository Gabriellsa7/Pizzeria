import { ReactNode, createContext } from "react";

const OnSendContext = createContext({});

type Props = {
  onSend: () => void;
  children?: ReactNode;
};

export function OnSendProvider({ onSend, children }: Props) {
  return (
    <OnSendContext.Provider value={{ onSend }}>
      {children}
    </OnSendContext.Provider>
  );
}
