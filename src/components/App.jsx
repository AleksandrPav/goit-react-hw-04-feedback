
import React, { Component } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";


class App extends Component {
  static defaultProps = {
    options: [
      { name: "good", text: "Good", value:0 },
      { name: "neutral", text: "Neutral" , value:0},
      { name: "bad", text: "Bad", value: 0 },
      
    ],
    
  }
  state = {
    good: this.props.options[0].value,
    neutral: this.props.options[1].value,
    bad: this.props.options[2].value,
  };
  countPositiveFeedbackPercentage() {
        return  this.countTotalFeedback() > 0 ? (this.state.good / (this.countTotalFeedback()) * 100).toFixed(0) : 0;
  }
  countTotalFeedback() {
        
        return this.state.good + this.state.neutral + this.state.bad;
    }
  handleClick = (event) => {
      event.preventDefault();
        for (let i = 0; i < 3; i += 1) {
            if (event.target.name === "good") {
                this.setState({ good: this.state.good + 1 });
            } else if (event.target.name === "neutral") {
                this.setState({ neutral: this.state.neutral + 1 });
            } else if (event.target.name === "bad") {
                this.setState({ bad: this.state.bad + 1 });
            }
        }
    }
    render() {
      return (
          <section>
            <div>
                <FeedbackOptions
                    options={this.props.options}
                    onLeaveFeedback={this.handleClick}
                />
          </div>
          <div>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              positive={this.countPositiveFeedbackPercentage()}
              tota={this.countTotalFeedback(this.state)}
            />
          </div>
          </section>
        );
    }
};

export default App;
