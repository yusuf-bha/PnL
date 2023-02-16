import React, { Component } from "react";
import MainContainer from "./MainContainer.js";
import Result from "./Results.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "testing",
            results: false
        }
        this.submit = this.submit.bind(this);
    }


    submit(e) {
        e.preventDefault();
        fetch('/api', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                wallet: e.target[0].value,
                token: e.target[1].value
                })
        })
        .then((response) => console.log(response));
    }

    render() {
        if (this.state.results === false) {
            return (
                <div>     
                    <MainContainer
                        submit={this.submit}
                        title={this.state.title}
                    ></MainContainer>             
                </div>
            )
        } else return (
            <Result>

            </Result>
        )
    }
}

export default App;