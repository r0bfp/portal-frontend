import { StyledButton } from "./style";

export function Button({ 
  onClick,
  ...props
  }) {

    return (
    <StyledButton
    onClick={onClick()}
    >
      {props.children}
    </StyledButton>
  );
}
