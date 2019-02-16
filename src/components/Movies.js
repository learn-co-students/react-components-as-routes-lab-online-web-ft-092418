import React from 'react';
import { movies } from '../data';

const movie = {
  width: '80px',
  padding: '20px',
  margin: '20 10px 10px',
  background: 'white',
  textDecoration: 'none',
  color: 'black'
}

const Movies = () => {
  return (
    <div style={movie}>
        <h1>Movies Page</h1>
        {movies.map (movie => <div>{movie.title} - {movie.time} <ul><li>{movie.genres}</li></ul></div>)}
    </div>
  );
};

export default Movies;
