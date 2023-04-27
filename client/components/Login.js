import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
            <form onSubmit={}>
                <label>
                    <input className="" type="text" placeholder="Username"></input>
                    <input className="" type="text" placeholder="Password"></input>
                    <input className="" type="submit">Login</input>
                </label>
            </form>
        </div>
      </div>
    )
  }
}
