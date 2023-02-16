import React, { Component } from "react";

class MainContainer extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.props.submit}>
                    <label>
                        <input type="text" placeholder="Wallet Address"></input>
                        <input type="text" placeholder="Token"></input>
                        <input type="submit"></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default MainContainer;
