import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import * as S from "./styles";

type InputsProps = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeHolder?: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputsProps>(
  ({ label, type, placeHolder, onChange, onFocus, ...rest }, ref) => {
    return (
      <S.Container>
        <S.Inputs>
          <S.Label>{label}</S.Label>
          <S.Input
            type={type}
            placeholder={placeHolder}
            onChange={onChange}
            onFocus={onFocus}
            ref={ref}
            {...rest} // Passe as outras props restantes
          />
        </S.Inputs>
      </S.Container>
    );
  }
);

export default Input;
