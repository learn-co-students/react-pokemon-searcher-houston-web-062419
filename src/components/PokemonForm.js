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

  handleName = (e) =>{
    this.setState({name: e.target.value})
  }
  handleHp = (e) =>{
    this.setState({hp: e.target.value})
  }
  handleF = (e) =>{
    this.setState({frontUrl: e.target.value})
  }
  handleB = (e) =>{
    this.setState({backUrl: e.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleF}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleB}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
