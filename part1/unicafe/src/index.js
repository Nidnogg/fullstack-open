import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Statistic = (props) => {
  const {text, stat} = props
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {stat}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const {stats} = props
  
  const feedback = () => {
    if(stats.all > 0) {
      return (
        <table>
          <tbody>
            <Statistic text={"good"} stat={stats.good} />
            <Statistic text={"neutral"} stat={stats.neutral} />
            <Statistic text={"bad"} stat={stats.bad} />
            <Statistic text={"all"} stat={stats.all} />
            <Statistic text={"average"} stat={stats.average} />
            <Statistic text={"positive"} stat={stats.positive}>%</Statistic>
          </tbody>
        </table>
      )
    } else {
      return (
        <p>No feedback given</p>
      )
    }
  }
  return (
    <div>
      <h1>Statistics</h1>
      <div>
       {feedback()}
      </div>
    </div>
  )
}
const App = () => {
 
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0, 
    average: 0,
    positive: 0
  })

  const average = (pos, neutral, bad) => {
    return ((pos + neutral + bad)/3.0).toFixed(2)
  }

  const positive = (pos, neutral, bad) => {
    return ((pos)*100/(pos + neutral + bad)).toFixed(2)
  }

  const handleGood = () => {
    const newStats = {
      ...stats,
      good: stats.good+=1,
      all: stats.all+=1,
      average: average(stats.good+1, stats.neutral, stats.bad),
      positive: positive(stats.good+1, stats.neutral, stats.bad)
    }
    setStats(newStats)
  }

  const handleNeutral = () => {
    const newStats = {
      ...stats,
      neutral: stats.neutral+=1,
      all: stats.all+=1,
      average: average(stats.good, stats.neutral+1, stats.bad),
      positive: positive(stats.good, stats.neutral+1, stats.bad)
    }
    setStats(newStats)
  }
  
  const handleBad = () => {
    const newStats = {
      ...stats,
      bad: stats.bad+=1,
      all: stats.all+=1,
      average: average(stats.good, stats.neutral, stats.bad+1),
      positive: positive(stats.good, stats.neutral, stats.bad+1)
    }
    setStats(newStats)
  }
  
  return (
    <div>
      <Header />
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <Statistics stats={stats}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)