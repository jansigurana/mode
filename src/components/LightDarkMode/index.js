// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  render() {
    const {LightDarkMode} = this.state
    return (
      <div className="container">
        <h1 className="heading">click To Change Mode</h1>
        {isLoggedIn ? (
          <button className="button" type="button" onClick="{this.state}">
            Light Mode
          </button>
        ) : (
          <button className="button" type="button" onClick="{this.state}">
            Dark Mode
          </button>
        )}
      </div>
    )
  }
}

export default LightDarkMode
