import { Component } from "react"
import { Statistics } from "components/Statistics/Statistics"
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Section } from "components/Section/Section"
import { Notification } from "components/Notification/Notification"
import './App.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (name) => {
    this.setState(prevState => ({
      ...this.state,
      [name]: prevState[name] + 1
    }))
  }




  countPositiveFeedbackPercentage() {
    const {good, neutral, bad} = this.state
    const positivePercentage = ((good/(good + neutral + bad)) * 100).toFixed(0) 
    return positivePercentage
  }

  render() {
    const {good, neutral, bad} = this.state
    const total = good + neutral + bad
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <Section title='Please leave feedback'>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>  
        : <Notification message='No feedbacks given' />}
      </Section>
    );
  }
};
