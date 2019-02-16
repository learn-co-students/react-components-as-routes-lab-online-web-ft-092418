import React from 'react';
import { actors } from '../data';

const actor = {
  width: '80px',
  padding: '20px',
  margin: '20 10px 10px',
  background: 'white',
  textDecoration: 'none',
  color: 'black'
}

const Actors = () => {
  return (
    <div style={actor}>
    <h1>Actors Page</h1>
      {actors.map(actor => <div>{actor.name} - <ul><li>{actor.movies}</li></ul></div>)}
    </div>
  );
};

export default Actors;
