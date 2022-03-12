import React, { useState, useEffect } from 'react'
import { Card, Container, MyImg } from './styles';

export default function Home() {

  const baseURL = 'https://rickandmortyapi.com/api/character'
  const itemsURL = 'id';
  

  let [tracks, setTracks] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  /* const [error, setError] = useState(null); */
  
  /* method: 'POST',
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
  },
  body: 'grant_type=client_credentials' */

  useEffect(() => {
    setIsLoading(true);//mostramos loading
    fetch(baseURL) 
      .then(res => res.json())
      .then((res) => setTracks(res.results))
      .finally(() => setIsLoading(false));//ocultamos el loading
  }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie

  const loading = (isLoading) ? "Loading..." : null;
    
  return (
       <Container>
         { loading }
         { tracks.map((track, key) => (
           <Card key={ itemsURL }>
             <MyImg src={ track.image } />
             { track.name }
           </Card>))}
       </Container>
     );
}
