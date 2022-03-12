import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import GlobalStyle from "./theme/global";
import theme from "./theme/theme";
import MyThemeProvider from "./components/ThemeContext/ThemeContext";
import LoginReducer from "./components/LoginReducer/LoginReducer";

/* import { useState } from "react"; */


function App() {
  /* const [ showHome, setShowHome ] = useState(false); */
  return (
    <div>
      <GlobalStyle />
      <MyThemeProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <LoginReducer />
        </ThemeProvider>
      </MyThemeProvider>
    </div>
  );
}

export default App;
