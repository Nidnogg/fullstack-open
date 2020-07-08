import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Statistics = (props) => {
  const {stats} = props
  
  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <p>good {stats.good}</p>
        <p>neutral {stats.neutral}</p>
        <p>bad {stats.bad}</p>
        <p>average {stats.average}</p>
        <p>positive {stats.positive}%</p>
      </div>
    </div>
  )
}
const App = () => {
  // save clicks of each button to own state

  /*
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  */
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0, 
    average: 0,
    positive: 0
  })


  const average = (pos, neutral, bad) => {
    return (pos + neutral + bad)/3.0
  }

  const positive = (pos, neutral, bad) => {
    return (pos)*100/(pos + neutral + bad)
  }

  const handleGood = () => {
    const newStats = {
      ...stats,
      good: stats.good+=1,
      average: average(stats.good+1, stats.neutral, stats.bad),
      positive: positive(stats.good+1, stats.neutral, stats.bad)
    }
    setStats(newStats)
  }

  const handleNeutral = () => {
    const newStats = {
      ...stats,
      neutral: stats.neutral+=1,
      average: average(stats.good, stats.neutral+1, stats.bad),
      positive: positive(stats.good, stats.neutral+1, stats.bad)
    }
    setStats(newStats)
  }
  
  const handleBad = () => {
    const newStats = {
      ...stats,
      bad: stats.bad+=1,
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