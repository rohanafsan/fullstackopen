import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => {
      props.handleClick(props.value + 1)
    }}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  const isPercentage = (props.text) === "positive"
  if (isPercentage) {
    return (
      <div> {props.text} {props.value} % </div>
    )
  }
  return (
    <td> {props.text} {props.value} </td>
  )
}


const Statistics = (props) => {
  const total = props.value.good + props.value.bad + props.value.neutral
  const average = (props.value.good * 1 + props.value.bad * -1)/(props.value.good + props.value.bad + props.value.neutral)
  const positive = (props.value.good * (100/(props.value.good + props.value.bad + props.value.neutral)))

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p> 
      </div>
    )
  }

  return (
    <div>
      <h2> Statistics </h2>
      <table>
        <tbody>
          <tr>
          <StatisticsLine text="good" value={props.value.good} />
          </tr>
          <tr>
          <StatisticsLine text="neutral" value={props.value.neutral} />
          </tr>
          <tr>
          <StatisticsLine text="bad" value={props.value.bad} />
          </tr>
          <tr>
          <StatisticsLine text="total" value={total} />
          </tr>
          <tr>
          <StatisticsLine text="average" value={average} />
          </tr>
          <tr>
          <StatisticsLine text="positive" value={positive} />
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const states = {
    good,
    neutral,
    bad
  }

  return (
    <div>
      <h2> Give feedback </h2>
      <Button handleClick={setGood} value={states.good} text = "good" />
      <Button handleClick={setNeutral} value={states.neutral} text = "neutral" />
      <Button handleClick={setBad} value={states.bad} text = "bad" />
      <Statistics value={states} />
    </div>
  )
}

export default App