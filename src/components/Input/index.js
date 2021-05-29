import { useState } from "react";

import { MainContainer } from "./style";


export function Input({
  reactIcon,
  placeholder,
  onChange,
  ...props
  }) {
  const [focused, setFocused] = useState(false);

  const handleOnFocus = () => {
    setFocused(true);
  };

  if(!onChange) onChange = () => {}

  return(
    <MainContainer focused={focused}>
      {reactIcon({ size: '1.3rem', color: focused ? '#7EC6D9' : ''})}
      <input
        onChange={(e) => onChange(e)}
        onFocus={handleOnFocus}
        onBlur={() => setFocused(false)}
        placeholder={placeholder || ''}
        {...props}
      />
    </MainContainer>
  )
}