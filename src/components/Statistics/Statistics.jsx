import React, { Component } from "react";

class Statistics extends Component {
    
   
    

    render({good, neutral, bad, positive, total} = this.props) {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Good: </td>
                            <td>{good}</td>
                        </tr>
                        <tr>
                            <td>Neutral: </td>
                            <td>{neutral}</td>
                        </tr>
                        <tr>
                            <td>Bad: </td>
                            <td>{bad}</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td>Positive: </td>
                            <td>{positive} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        );
    }
}

export default Statistics;