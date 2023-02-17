import React, { Component } from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import '../styles.css';

class Result extends Component {
    constructor(props) {
        super(props) 

    }


    componentDidMount() {
        console.log(this.props, "PROPS IN RESULTSSS")
    }


    render() {
        return (
            <div className="results">
                <h1>Total PnL:    {this.props.pnl[this.props.pnl.length - 1]}%</h1>
                <Line
                data={ 
                    {
                        labels: this.props.labels,
                        datasets: [
                            {
                                data: this.props.prices,
                                label: "Price",
                                borderColor: "#3e95cd",
                                backgroundColor: "#7bb6dd",
                                fill: false
                            },
                            {
                                data: this.props.pnl,
                                label: "PnL",
                                borderColor: "#3cba9f",
                                backgroundColor: "#71d1bd",
                                fill: false
                            }
                        ]
                    }
                 }
                ></Line>
            </div>
        )
    }
}

export default Result;
