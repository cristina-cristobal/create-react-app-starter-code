import React, {Component} from 'react'

const Searchbar = (props) => {
  return (
    <input className="search" placeholder="Search..." onChange={props.handleSearch}></input>
  )
}

export default Searchbar
