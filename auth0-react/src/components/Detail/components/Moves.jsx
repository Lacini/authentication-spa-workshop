import React from 'react';

function Moves({ pokemonDetail }) {
  return (
    <ul>
      {pokemonDetail?.moves.map(({ move }) => (
        <li key={move.name}>{move.name}</li>
      ))}
    </ul>
  );
}

export default Moves;
