import React from "react";

import "./PokemonCard.css";

export const PokemonCard = ({ pokemonName, imageSource, id, types, stats }) => {
  return (
    <div
      class="card mx-auto text-white bg-primary mt-3"
      style={{ width: 18 + "rem" }}
    >
      <div className="id-container">
        <div className="id-container__inner">#{id}</div>
      </div>
      <div>
        <h5 class="card-title card-title__text">
          {pokemonName[0].toUpperCase() + pokemonName.substring(1)}
        </h5>
      </div>
      <img class="card-img-top" src={imageSource} alt="pokemon" />
      <div className="container outter_container_types">
        {types.map((type) => {
          return (
            <div className="type-container">
              <div className="type-container__text ">
                <div className="type-container__text__button">
                  {type.type.name[0].toUpperCase() +
                    type.type.name.substring(1)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="card-body">
        <div>
          <h6 className="title-stats">Base Stats</h6>
        </div>
        <div className="stats-container">
          {stats.map((stat) => {
            return (
              <div className="inner_stats_container">
                <div>{stat.stat.name}</div>
                <div>{stat.base_stat} pts</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
