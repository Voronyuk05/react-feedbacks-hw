import { useState } from "react"
import { Statistics } from "components/Statistics/Statistics"
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Section } from "components/Section/Section"
import { Notification } from "components/Notification/Notification"
import './App.css'

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const positivePercentage = countPositiveFeedbackPercentage()

  function onLeaveFeedback(name) {
    if (name === 'good') {
      setGood(value => value + 1)
    } else if (name === 'neutral') {
      setNeutral(value => value + 1)
    } else if (name === 'bad') {
      setBad(value => value + 1)
    }
  }

  function countPositiveFeedbackPercentage() {
    const positivePercentage = ((good/(good + neutral + bad)) * 100).toFixed(0) 
    return positivePercentage
  }

  return (
    <Section title='Please leave feedback'>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback}/>
      {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>  
      : <Notification message='No feedbacks given' />}
    </Section>
  )
}
