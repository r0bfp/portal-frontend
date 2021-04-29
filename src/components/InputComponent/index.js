import { useState } from "react";

import { MainContainer } from "./style";


export function Input({
  reactIcon,
  placeholder,
  ...props
  }) {
  const [focused, setFocused] = useState(false);

  const handleOnFocus = () => {
    setFocused(true);
  };

  return(
    <MainContainer focused={focused}>
      {reactIcon({ size: '1.3rem', color: focused && '#7EC6D9'})}
      <input
        onFocus={handleOnFocus}
        onBlur={() => setFocused(false)}
        placeholder={placeholder || ''}
        {...props}
      />
    </MainContainer>
  )
}