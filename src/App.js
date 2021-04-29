import { ThemeProvider } from "styled-components";

import { Login } from "./pages/Login";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";


function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Login/>
    </ThemeProvider>
  );
}

export default App;
