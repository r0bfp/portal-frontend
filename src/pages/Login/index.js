import React, { useState } from 'react';
import { FiUser, FiKey } from "react-icons/fi";
import logo from "../../assets/logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  MainContainer,
  MainContent,
  Label,
  InputContainer,
  ButtonContainer,
  Logo,
  LogoContainer
} from "./styles";


export function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginData, setLoginData] = useState({
    username: ``,
    password: ``
  });

  function handleInputChange(event) {
    console.log(event.target.value)
  }

  function handleLogin(event) {
    // console.log(event.targe);
    // setLoginError(true);
  }

  return (
    <MainContainer>
      <MainContent
      onAnimationEnd={() => setLoginError(false)}
      loginError={loginError}
      loginSuccess={loginSuccess}
      >
        <LogoContainer>
          <Logo src={logo}></Logo>
        </LogoContainer>
        <InputContainer>
          <Label>Username</Label>
          <Input 
          id='username'
          onChange={handleInputChange}
          reactIcon={FiUser} 
          placeholder='Enter your username'
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input 
          id='password'
          onChange={handleInputChange}
          reactIcon={FiKey} 
          placeholder='Enter your password'
          ></Input>
        </InputContainer>
        <ButtonContainer>
          <Button
            onClick={() => handleLogin}
          >Login</Button>
        </ButtonContainer>
      </MainContent>
    </MainContainer>
  )
}