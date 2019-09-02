import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super(),
    this.state = {
      pokemonMaster: [],
      pokemonDisplay: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemonMaster: pokemons,
        pokemonDisplay: pokemons
      })
    })
  }

  handleSearchChange = (e) => {
    let display = this.state.pokemonMaster.filter(pokemon => pokemon.name.includes(e.target.value))
    this.setState({
      pokemonDisplay: display
    })
  }

  addPokemon = (e) => {
    let display = []
    display = [...this.state.pokemonDisplay, e]
    console.log(display)
    this.setState ({
      pokemonDisplay: display
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={(e) => this.handleSearchChange(e)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemonDisplay}/>

      </div>
    )
  }
}

export default PokemonPage
