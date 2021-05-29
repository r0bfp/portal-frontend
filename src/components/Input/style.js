import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: 300ms;

  ${props => 
    props.focused &&
    `
    border-color: #7EC6D9;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0px 2px rgb(126, 198, 217, 30%);
    `
  }

  & > input {
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 5px;
    font-size: 15px;
  }

  & > svg {
    margin: 0 5px 0 10px;
    transition: 200ms;
  }
`;
