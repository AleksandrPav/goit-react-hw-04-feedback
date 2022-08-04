
import React, { Component } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import StatisticsSection from "components/StatisticsSection/StatisticsSection";
import Notification from "components/Notification/Notification";
import css from "./App.module.css";

class App extends Component {
  static defaultProps = {
    options: [
      { name: "good", text: "Good", value:0 },
      { name: "neutral", text: "Neutral" , value:0},
      { name: "bad", text: "Bad", value: 0 },
      
    ],
    
  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  countPositiveFeedbackPercentage() {
        return  this.countTotalFeedback() > 0 ? (this.state.good / (this.countTotalFeedback()) * 100).toFixed(0) : 0;
  }
  countTotalFeedback() {
    
        
        return this.state.good + this.state.neutral + this.state.bad;
    }
  handleClick = (e) => {
    const name = e.target.name;
		this.setState((prevState) => ({[name]: prevState[name] + 1}));
  }
    
  
  

  render() {
    
    if (this.countTotalFeedback() > 0) {
      return (
        <div className={css.container}>
          
        
        <StatisticsSection title="Give feedback">
          <FeedbackOptions
            options={this.props.options}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            positive={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback(this.state)}
          />
          </StatisticsSection>
          </div>
    
      );
    } else {
      return (
      <div className={css.container}>
      
          <StatisticsSection title="Give feedback">
          <FeedbackOptions
              options={this.props.options}
              onLeaveFeedback={this.handleClick}
                />
           <Notification message="There is no feedback" />
          </StatisticsSection>
     
        </div>
        );
    }



      
    }
};

export default App;
