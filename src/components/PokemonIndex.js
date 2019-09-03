import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemons:[],
      search:""
    }
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(res => this.setState({pokemons: res}))
  }

  handleSearch = (e, {value})=>{
    console.log(value)
    if (value === ""){
      fetch("http://localhost:3000/pokemon")
        .then(res => res.json())
        .then(res => this.setState({pokemons: res}))
      }else{
        let arr = this.state.pokemons.filter(p => p.name.startsWith(value))
        this.setState({pokemons: arr})
        console.log(arr)
      }
  }

  handleSubmit = (st) =>{
    //e.preventDefault();
      console.log(st)

      let pok = {
                  "name": st.name,
                  "sprites": {
                    "front": st.frontUrl,
                    "back": st.backUrl
                  },
                  stats: [{}, {}, {}, {}, {}, {"value": st.hp,
        "name": "hp"}]
                }

      let arr = this.state.pokemons
      arr.push(pok)
      this.setState({pokemons: arr})

      let configObj = {
                method: "POST",
                headers: {
                 "Content-Type": "application/json",
                  "Accept": "application/json"
                  },
                 body: JSON.stringify(pok)
        };

      return fetch("http://localhost:3000/pokemon", configObj)
                .then(function(response) {
                         return response.json();
                 })
                 .then(function(object) {

                       

                        console.log(object);
                 })


  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>

        <PokemonForm handleSubmit = {this.handleSubmit}/>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
