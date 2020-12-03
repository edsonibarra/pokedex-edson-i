import React, { useState, useEffect } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { PokemonCard } from "./components/pokemon/PokemonCard";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      toArray.push(data);
      setPokemonData(toArray);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter Pokemon Name"
            />
          </label>
        </form>
      </div>
      {pokemonData.map((pokemon) => {
        return (
          <div className="container">
            <PokemonCard
              pokemonName={pokemon.name}
              imageSource={pokemon.sprites.front_default}
              id={pokemon.id}
              types={pokemon.types}
              stats={pokemon.stats}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
