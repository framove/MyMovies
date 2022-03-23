import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Span } from "../LoginReducer/styles";
import Search from "../Search/Search";
import { useTheme } from "../ThemeContext/ThemeContext";
import MovieCard from "./MovieCard";
import { Container, Title, Welcome, Title2 } from "./styles";
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "https://api.themoviedb.org/3/search/movie?query=" + search
      : "https://api.themoviedb.org/3/discover/movie";
    fetch(searchUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDMwMDg5NjRjYjczNGVkZGM4ZmQ3NGIwNjA2MDk2ZiIsInN1YiI6IjYyMmEzMjVkZDIzNmU2MDAxYjMxOWZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtNewtuP5u31q3i6HdI6p0RuhP6CgUue_sh1W0Z6A9Q",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [search]);

  const darkTheme = useTheme();

  const theme = {
    backgroundColor: darkTheme ? "#16161a" : "#eee",
    borderBottom: darkTheme && "solid 2px #83838a",
    color: darkTheme ? "#f8f9fa" : "#16161a",
  };
  return (
    <div style={theme}>
      <Welcome>
        <Title2 style={theme}>Hello Fran</Title2>

        <Link to="/">
          <LogoutIcon
            fontSize='medium'
            sx={{ color: "#00abb5" }}
          />
        </Link>
      </Welcome>
      <Search />
      <Title>
        You can´t miss <Span>this...</Span>
      </Title>
      <Container>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
    </div>
  );
}
