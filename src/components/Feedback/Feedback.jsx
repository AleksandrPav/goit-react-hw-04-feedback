import React, { Component } from "react";
import Statistics from "components/Statistics/Statistics";

class Feedback extends Component {
   
    render() {
        return (
            <div>
                <Statistics
                    good={this.props.good}
                    neutral={this.props.neutral}
                    bad={this.props.bad}
                    positivePercentage={this.props.positivePercentage}
                />

            </div>
        );
    }


}

export default Feedback;