import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map(
            (m, index) => 
            <div key={index}>
                <h3>Title: {m.title}, Time: {m.time}</h3>
                  <h4>Genres</h4>
                <ul>
                  {m.genres.map((g, index) =>
                  <li key={index}>{g}</li>
                  )}
                </ul>
            </div>
          )}
    </div>
  );
};

export default Movies;

