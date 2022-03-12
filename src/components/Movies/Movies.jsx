import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Container } from './styles';

export default function Movies() {

  const [movies, setMovies] = useState ([]);

   useEffect(() => {
      fetch("https://api.themoviedb.org/3/discover/movie", {
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
    }, []);

  return (
    <div>
        <Container>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </Container>
    </div>
  )
}
