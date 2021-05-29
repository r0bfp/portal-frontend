import styled from "styled-components";
import light from "../../styles/themes/light";


export const StyledButton = styled.button`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 2px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,0.075);

  background-color: ${light.colors.secundary};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${light.colors.textWhite};

  cursor: pointer;
  transition: 150ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 .130rem .30rem rgba(0,0,0,0.3);
  }

  &:active { 
    transform: scale(1);
  }
`;
