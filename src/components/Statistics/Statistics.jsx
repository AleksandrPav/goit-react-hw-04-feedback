import React, { Component } from "react";

class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage() {
        return  this.countTotalFeedback() > 0 ? (this.state.good / (this.countTotalFeedback()) * 100).toFixed(0) : 0;
    }
    render() {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Good:</td>
                            <td>{this.state.good}</td>
                        </tr>
                        <tr>
                            <td>Neutral:</td>
                            <td>{this.state.neutral}</td>
                        </tr>
                        <tr>
                            <td>Bad:</td>
                            <td>{this.state.bad}</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>{this.countTotalFeedback()}</td>
                        </tr>
                        <tr>
                            <td>Positive feedback:</td>
                            <td>{this.countPositiveFeedbackPercentage()} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Statistics;