import React, {Component} from 'react';
import '../App.css';
import PokemonList from './PokemonList'
import StatsDisplay from '../components/StatsDisplay'
import Searchbar from '../components/Searchbar'

const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

export default class App extends Component {

  constructor(){
  super()
  this.state = {
    allPokemon: [],
    pokemonTeam: [],
    scoutingPokemon: null,
    searchTerm: ""
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  getFilteredWildPokemon = () => {
    return this.getWildPokemon().filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  componentDidMount(){
    fetch(ALL_POKEMON_URL)
    .then(res => res.json())
    .then(pokemonObjs => {this.setState({
      allPokemon: pokemonObjs.results
    })})
  }

  handleAddPokemon = (pokemon) => {
    if (this.state.pokemonTeam.length < 6){
    let pokemonTeamCopy = [...this.state.pokemonTeam]
    this.setState({
    pokemonTeam: [...pokemonTeamCopy, pokemon]
  })} else {
    alert("Can't have more than 6 pokemon on a team!")
  }
  }

  getWildPokemon = () => {
    return this.state.allPokemon.filter(pokemon => !this.state.pokemonTeam.includes(pokemon))
  }

  handleScoutPokemon = (pokemonURL) => {
    let scoutingPokemonCopy = [this.state.scoutingPokemon]
    fetch(pokemonURL)
    .then(res => res.json())
    .then(pokemonData =>
      this.setState({
        scoutingPokemon: pokemonData
      })
    )
  }

  handleRemovePokemon = (pokemon) => {
    console.log('attempting to remove pokemon')
    let pokemonTeamCopy = [...this.state.pokemonTeam]
    this.setState({
      pokemonTeam: [...pokemonTeamCopy.filter(pokemonObj => pokemonObj !== pokemon)]
    })
  }

  handleClearTeam = () => {
    this.setState({
      pokemonTeam: []
    })
  }

  render(){
    return(
      <div className="App">
      <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
      <h4>Pokemon Team:</h4>
      {/*Pokemon Team*/}
      <PokemonList pokemons={this.state.pokemonTeam}
      handleScoutPokemon={this.handleScoutPokemon}
      handleClickPokemon={this.handleRemovePokemon}
      />

      <button onClick={this.handleClearTeam}>RESET TEAM</button>
      <br></br>
      <br></br>

      <StatsDisplay pokemonToDisplay={this.state.scoutingPokemon}/>
      <Searchbar handleSearch={this.handleSearch} />
      <br></br>
      <br></br>
      <h4>Wild Pokemon</h4>
      {/*Wild Pokemon*/}
      <PokemonList pokemons={this.getFilteredWildPokemon()}
      handleClickPokemon={this.handleAddPokemon}
      handleScoutPokemon={this.handleScoutPokemon}
      />
      </div>
    )
  }
}
