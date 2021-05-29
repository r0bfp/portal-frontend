import styled, { keyframes, css } from "styled-components";


export const incorrectAnimation = keyframes`
  0% {
    transform: rotate(0);
  } 35% {
    transform: rotate(1deg);
  } 70% {
    transform: rotate(-1deg);
  } 100% {
    transform: rotate(0);
  }
`;

export const hideFormAnimation = keyframes`
  from {
    transform: translateY(0);
  } to {
    transform: translateY(100vh);
  }
`;

const showFormAnimation = keyframes`
  0% {
    transform: translateY(-100vh);
  } 100% {
    transform: translateY(0);
  }
`;

const loginError = css`
  animation: ${incorrectAnimation} 100ms, ${showFormAnimation} paused;
  animation-iteration-count: 2;
  animation-timing-function: linear;
`;

const loginSuccess = css`
  animation: ${hideFormAnimation} 500ms forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Logo = styled.img`
  width: 200px;
  height: 50px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 400px;
  height: 500px;
  padding: 20px;

  background-color: white;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${showFormAnimation} 500ms forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  ${props => props.loginSuccess && loginSuccess}
  ${props => props.loginError && loginError}
`;

export const Label = styled.label`
  display:inline-block;
  margin: 5px 0;
  font-size: 18px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const InputContainer = styled.div`
  margin: 5px 0;
  width: 100%;
  padding: 0 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

`;

