import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h2>{movie.title} - {movie.time}</h2>
            {movie.genres.map(genre => {
              return <ul>{genre}</ul>
            })}
          </div>
        ))}
    </div>
  );
};

export default Movies;
