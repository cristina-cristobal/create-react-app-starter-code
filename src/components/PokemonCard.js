import React, {Component} from 'react'

const PokemonCard = (props) => {
  return(
    <div className="pokemon card"
    onDoubleClick={() => {props.handleClickPokemon(props.pokemon)}} onClick={() => {props.handleScoutPokemon(props.pokemon.url)}}>
    {props.pokemon.name}
    </div>
  )
}

export default PokemonCard

// data-url={props.pokemon.url}
