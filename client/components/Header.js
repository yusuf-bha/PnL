import React, { Component } from "react";
import '../styles.css';

class Header extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div>
                <ul>
                    <li className="home">Home</li>
                    <li className="history">History</li>
                </ul>
                
            </div>
        )
    }
}

export default Header;