import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = value => {
    // console.log('feedback given')
    if (value === 1) {
      setGood(good + 1)
    } else if (value === 0) {
      setNeutral(neutral + 1)
    } else if (value === -1) {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => giveFeedback(1)} text="good" />
      <Button handleClick={() => giveFeedback(0)} text="neutral" />
      <Button handleClick={() => giveFeedback(-1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  else {
    const all = good + neutral + bad
    return (
      <>
        <h1>statistics</h1>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={(good - bad) / all} />
          <Statistic text="positive" value={[good / all * 100, '%']} />
        </table>
      </>
    )
  }
}

const Statistic = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
)


ReactDOM.render(<App />,
  document.getElementById('root')
)