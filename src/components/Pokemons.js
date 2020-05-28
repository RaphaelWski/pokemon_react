import React from 'react';

const Pokemons = ({ pokemons, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {pokemons.map(pokemon => (
        <li key={pokemon.id} className='list-group-item'>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default Pokemons;
