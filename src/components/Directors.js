import React from 'react';
import { directors } from '../data';

const director = {
  width: '80px',
  padding: '20px',
  margin: '20 10px 10px',
  background: 'white',
  textDecoration: 'none',
  color: 'black'
}

const Directors = () => {
  return (
    <div style={director}>
      <h1>Directors Page</h1>
      {directors.map(director => <div>{director.name} - <ul><li>{director.movies}</li></ul></div>)}
    </div>
  );
}

export default Directors
