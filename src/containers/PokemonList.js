import React, {Component} from 'react'
import PokemonCard from '../components/PokemonCard'

export default class PokemonList extends Component {
  render(){
    return(
      <div>
      {this.props.pokemons.map(pokemon => <PokemonCard
        pokemon={pokemon}
        key={pokemon.name}
        handleClickPokemon={this.props.handleClickPokemon}
        handleScoutPokemon={this.props.handleScoutPokemon}
        />)}
      </div>
    )
  }
}
