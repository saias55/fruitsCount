import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, banana: 0}

  isMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  isBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mangoes, banana} = this.state
    return (
      <div className="bgc">
        <div className="bottom-bgc">
          <h1>
            Bob ate {mangoes} mangoes {banana} bananas
          </h1>
          <div className="setting-in-row">
            <div className="image-button-details-col">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button type="button" onClick={this.isMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-button-details-col">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button type="button" onClick={this.isBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
