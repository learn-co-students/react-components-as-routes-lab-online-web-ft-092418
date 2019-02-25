import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(
        (a, index) =>
        <div key={index}> 
          Name: {a.name}
          <ul>
            {a.movies.map(
              (m, index) =>
            <li key={index}>
              {m}
            </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
