import React, { useState, useEffect } from 'react';
import Pokemons from './components/Pokemons';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(30);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/pokemons');
      setPokemons(res.data);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pokemons</h1>
      <Pokemons pokemons={currentPokemons} loading={loading} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
