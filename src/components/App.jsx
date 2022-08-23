
import React, {useState} from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import StatisticsSection from "components/StatisticsSection/StatisticsSection";
import Notification from "components/Notification/Notification";
import css from "./App.module.css";

const App = () => {
  const defaultProps = {
  options: [
    { name: "good", text: "Good", value: 0 },
    { name: "neutral", text: "Neutral", value: 0 },
    { name: "bad", text: "Bad", value: 0 },
      
  ],
}
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
 const countPositivFeedbackPercentage = () => {
    return countTotalFeedback() > 0 ? (good / (countTotalFeedback()) * 100).toFixed(0) : 0;
  }

  const handleClick = (name) => {
    setGood(name === "good" ? good + 1 : good);
    setNeutral(name === "neutral" ? neutral + 1 : neutral);
    setBad(name === "bad" ? bad + 1 : bad);
  }

      return (
        <div className={css.container}>
          <StatisticsSection title="Give feedback">        
          <FeedbackOptions
            options={defaultProps.options}
            onLeaveFeedback={handleClick}
            />
            {countTotalFeedback() > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positive={countPositivFeedbackPercentage()}
            total={countTotalFeedback()}
          />) : <Notification message="There is no feedback" />}
          </StatisticsSection>
          </div>
    
      );

}

export default App;





// class App extends Component {
//   static defaultProps = {
//     options: [
//       { name: "good", text: "Good", value:0 },
//       { name: "neutral", text: "Neutral" , value:0},
//       { name: "bad", text: "Bad", value: 0 },
      
//     ],
    
//   }
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

  
//   countPositiveFeedbackPercentage() {
//         return  this.countTotalFeedback() > 0 ? (this.state.good / (this.countTotalFeedback()) * 100).toFixed(0) : 0;
//   }
//   countTotalFeedback() {
//         return this.state.good + this.state.neutral + this.state.bad;
//   }
  

//   handleClick = (name) => {
// 		this.setState((prevState) => ({[name]: prevState[name] + 1}));
//   }
    
  
  

//   render() {
//       return (
//         <div className={css.container}>
//           <StatisticsSection title="Give feedback">        
//           <FeedbackOptions
//             options={this.props.options}
//             onLeaveFeedback={this.handleClick}
//             />
//             {this.countTotalFeedback() > 0 ? (
//             <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             positive={this.countPositiveFeedbackPercentage()}
//             total={this.countTotalFeedback(this.state)}
//           />) : <Notification message="There is no feedback" />}
//           </StatisticsSection>
//           </div>
    
//       );

//   }
// }

// export default App;
