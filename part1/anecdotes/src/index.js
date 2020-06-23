import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [largest, setLargest] = useState(0)

  //Get random int from 0 to (max - 1)
  const randNumber = (max) => (
    setSelected(Math.floor(Math.random() * max))
  )

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    //If selected anecdote has more votes than largest votes so far, make
    //selected anecdote largest
    if (copy[selected] > copy[largest]) {
      setLargest(selected)
    }
    return (
      setVotes(copy)
    )
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={() => vote()} text="vote"/>
      <Button handleClick={() => randNumber(props.anecdotes.length)} text="next anecdote"/>
      <Anecdote title="Anecdote with the most votes" anecdote={props.anecdotes[largest]} votes={votes[largest]} />
    </div>
  )
}

const Anecdote = ({ title, anecdote, votes }) => (
  <>
    <h1>{title}</h1>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </>
)

const Button = ({ handleClick, text }) => (
  <>
  <button onClick={handleClick}>{text}</button>
  </>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
