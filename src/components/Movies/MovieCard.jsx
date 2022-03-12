import React from 'react';
import { Card } from './styles';
import { MyImg } from './styles';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
            <Card to={"/movies/" + movie.id}>
                <MyImg width={230} height={345} src={imageUrl} alt="{movie.title}" />
                <div>{movie.title}</div>
            </Card>
    
  )
}
