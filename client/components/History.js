import React, { Component } from 'react'

export default class History extends Component {
  render() {
    const tabs = [];
    for (let i = 0; i < ; i++) {
      tabs.push(<Tab
        high={pro}
      />)
    }
    return (
      <div>
        <h1>History</h1>
        {tabs}
      </div>
    )
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
