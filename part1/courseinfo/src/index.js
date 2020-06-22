import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content
        parts={[part1, part2, part3]}
        courseExercises={[exercises1, exercises2, exercises3]} />

      <Total courseExercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0]} exercises={props.courseExercises[0]} />
      <Part name={props.parts[1]} exercises={props.courseExercises[1]} />
      <Part name={props.parts[2]} exercises={props.courseExercises[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {
        props.courseExercises[0] +
        props.courseExercises[1] +
        props.courseExercises[2]}
      </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))