import { StyledButton } from "./style";

export function Button({ onClick, ...props }) {
  return (
    <StyledButton onClick={onClick()}>
      <span>{props.children}</span>
    </StyledButton>
  );
}
