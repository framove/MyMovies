import React from 'react';
import { Card, Text } from './styles';
import { MyImg } from './styles';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useTheme } from '../ThemeContext/ThemeContext';


export default function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  
    const darkTheme = useTheme();

    const theme = {
    color: darkTheme ? "#f8f9fa" : "#16161a",
  };

    return (
        
            <Card>
              <Link to={"/movies/" + movie.id}>
                <MyImg width={230} height={345} src={imageUrl} alt="{movie.title}" />
                <Text style={theme}>{movie.title}</Text>
              </Link> 
            </Card>
        
  )
}
