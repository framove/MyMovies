import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import GlobalStyle from "./theme/global";
import theme from "./theme/theme";
import MyThemeProvider from "./components/ThemeContext/ThemeContext";
import LoginReducer from "./components/LoginReducer/LoginReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movies/MovieDetails";

/* import { useState } from "react"; */


function App() {
  /* const [ showHome, setShowHome ] = useState(false); */
  return (
    <div>
      <GlobalStyle />
        <MyThemeProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Router>
              <Routes>
                <Route path="/" element={<LoginReducer />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </MyThemeProvider>
    </div>
  );
}

export default App;
