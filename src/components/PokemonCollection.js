import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    return (
    	<div>
	    	<Card.Group itemsPerRow={6}>
		        {this.props.pokemons.map(p => <PokemonCard pokemon = {p}/>)}
		     </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
     //
     // 
