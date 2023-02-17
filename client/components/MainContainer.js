import React, { Component } from "react";
import '../styles.css';

class MainContainer extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div className="main">
                <form onSubmit={this.props.submit}>
                    <label className="form">
                        <input className="input" type="text" placeholder="Wallet Address"></input>
                        <input className="input" type="text" placeholder="Token"></input>
                        <input className="button" type="submit"></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default MainContainer;
