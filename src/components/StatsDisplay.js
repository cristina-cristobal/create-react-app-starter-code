import React from 'react'

const StatsDisplay = (props) => {
  return props.pokemonToDisplay ? (
    <div className="details">
    <h4>Scouting Pokemon:</h4>
    <div className="card details">
      <div>
        <div className="row">{props.pokemonToDisplay.name}</div>
        <div className="row">
        <div><img alt="" src={props.pokemonToDisplay.sprites.front_shiny} /> </div>
        <div className="block"></div>
        {props.pokemonToDisplay.stats.map(stat => <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>)}
        </div>
      </div>
    </div>
    </div>) : null
}

export default StatsDisplay
