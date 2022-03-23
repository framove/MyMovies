import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DetailContainer, Img, Text, Genres, Title } from "./stylesDetails";
import { useTheme } from "../ThemeContext/ThemeContext";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const darkTheme = useTheme();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/" + movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDMwMDg5NjRjYjczNGVkZGM4ZmQ3NGIwNjA2MDk2ZiIsInN1YiI6IjYyMmEzMjVkZDIzNmU2MDAxYjMxOWZlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtNewtuP5u31q3i6HdI6p0RuhP6CgUue_sh1W0Z6A9Q",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const theme = {
    backgroundColor: darkTheme ? "#16161a" : "#eee",
    color: darkTheme ? "#f8f9fa" : "#16161a",
  };

  return (
    <DetailContainer style={theme}>
      <Img src={imageUrl} alt={movie.title} />
      <Text>
        <Genres>{movie.genres.map((genre) => genre.name).join(", ")}</Genres>
        <Title>
          <strong>{movie.title}</strong>
        </Title>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </Text>
    </DetailContainer>
  );
}
