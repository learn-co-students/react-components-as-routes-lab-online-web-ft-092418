import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map(
            (m) => 
            <div>
                <h3>Title: {m.title}, Time: {m.time}</h3>
                <ul>
                  {/* <li>{m.genres.map((g) =>
                    console.log(g.name)
                    )}</li> */}
                </ul>
            </div>
          )}
    </div>
  );
};

export default Movies;


//need to get the genres to show