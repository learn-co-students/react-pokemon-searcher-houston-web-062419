import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handlechange = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0].value,
        stats: [
          {
            "value": parseInt(e.target[1].value),
            "name": "hp"
          }
        ],
        sprites: {
          front: e.target[2].value,
          back: e.target[3].value
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" handlechange={this.handlechange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" handlechange={this.handlechange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" handlechange={this.handlechange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" handlechange={this.handlechange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
