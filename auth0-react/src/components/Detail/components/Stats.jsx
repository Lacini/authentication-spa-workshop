import React from 'react';

function Stats({ pokemonDetail }) {
  return (
    <ul>
      {pokemonDetail?.stats.map(({ base_stat: baseStat, stat }) => (
        <li key={stat.name}>
          {stat.name}: {baseStat}
        </li>
      ))}
    </ul>
  );
}

export default Stats;
