import React, { Component } from "react";
import MainContainer from "./MainContainer.js";
import Result from "./Results.js";
import Header from "./Header.js";
import "../styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "testing",
      results: false,
    };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        wallet: e.target[0].value,
        token: e.target[1].value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          title: "changed state",
          results: true,
          data: response,
        });
      });
  }

  render() {
    if (this.state.results === false) {
      return (
        <div className="app">
          <Header></Header>
          <h1>Wallet Tracker</h1>
          <MainContainer
            submit={this.submit}
            title={this.state.title}
          ></MainContainer>
        </div>
      );
    } else
      return (
        <div>
          <Header></Header>  
          <Result
            prices={this.state.data.prices}
            pnl={this.state.data.pnl}
            labels={this.state.data.lables}
          ></Result>
        </div>
      );
  }
}

export default App;
