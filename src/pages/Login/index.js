import React from 'react';
import { FiUser } from "react-icons/fi";

import { Input } from "../../components/InputComponent";
import { MainContainer, MainContent } from "./styles";


export function Login() {
  return (
    <MainContainer>
      <MainContent>
        <Input reactIcon={FiUser} placeholder='teste'></Input>
      </MainContent>
    </MainContainer>
  )
}