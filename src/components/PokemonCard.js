import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      imgToggle: true
    }
  }


  clickImage = () => {
    this.setState ({
      imgToggle: !this.state.imgToggle
    })
  }

  render() {
    let hp = this.props.stats.find((s) => s.name == 'hp').value || 40
    let image = this.state.imgToggle ? this.props.sprites.front : this.props.sprites.back
    console.log(this.props.stats)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickImage}>
            <img alt="oh no!" src={image}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
