interface ButtonFormProps {
  children: string;
  className?: string;
  type?: string;
  onCLick?: (() => Promise<void>) | undefined;
}
import * as S from "./styles";

export default function Button({
  children,
  className,
  // type,
  onCLick,
}: ButtonFormProps) {
  return (
    <S.Container>
      <S.Button onClick={onCLick} className={className} type="submit">
        <p>{children}</p>
      </S.Button>
    </S.Container>
  );
}
