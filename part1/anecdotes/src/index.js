import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const random = () => {
  return Math.floor(Math.random() * 6); 
}

const App = (props) => { 
  const [selected, setSelected] = useState(random())
  const [votes, setVotes] = useState(new Array(6).fill(0))
  //const [max, setMax] = useState(Math.max(votes))


  const { anecdotes } = props

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleNext = () => {
    if(selected+1 < anecdotes.length) {
      setSelected(selected+1)
    } else {
      setSelected(0)
    }
  }

  const max = () => {
    //const max = Math.max(votes)
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}  
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[max()]}  
      <br />
      <p>has {Math.max(...votes)} votes</p>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, 
  document.getElementById('root')
)