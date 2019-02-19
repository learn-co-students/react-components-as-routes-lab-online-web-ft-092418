import React from 'react';
import { movies } from '../data';



const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => (
          <div>
            <h3>{m.title}</h3>
            {m.time}
            <ul>
              {m.genres.map(g => {
                return <li>{g}</li> 
              })}
            </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
