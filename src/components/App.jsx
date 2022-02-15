import React, {Component} from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section'
import Notification from 'components/Notifications';


class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  onLeaveFeedback = (e) => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedbacks = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, feedback) => acc + feedback, 0);
  };
    
  countPositiveFeedbackPercentage = total => {
    return ((this.state.good / total) * 100).toFixed();
  };
    


  render() {
            const buttons = Object.keys(this.state);
            const { good, neutral, bad } = this.state;
            const totalFeedbacks = this.countTotalFeedbacks();
            const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedbacks);
    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (<Notification message="There is no feedback" />)}
      </Section>
                
    );
  }
};

export default App;