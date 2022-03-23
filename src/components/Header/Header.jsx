import React from "react";
import { useTheme, useUpdateTheme } from "../ThemeContext/ThemeContext";
import { Link, BrowserRouter as Router } from "react-router-dom";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Logo, MyHeader, Title } from "./styles";



export default function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const theme = {
    backgroundColor: darkTheme ? "#2c2c31" : "#30575F",
    borderBottom: darkTheme && "solid 2px #83838a",
  }
  
  return (
    <div>
      <MyHeader style={theme}>
      <Router>
        <Link to="movies">
        <Logo><LiveTvIcon fontSize="large" sx={{ color: "#00abb5" }} />
        <Title>My Movies</Title></Logo>
        </Link>
        </Router>
        <div onClick={toggleTheme}>
          {darkTheme ? (
            <Brightness4Icon fontSize="large" sx={{ color: "#00abb5" }} />
          ) : (
            <ModeNightIcon fontSize="large" sx={{ color: "#00abb5" }} />
          )}
        </div>
      </MyHeader>
    </div>
  );
}
