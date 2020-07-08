import React from 'react'
import ReactDOM from 'react-dom'

const Part = props => {
  const {part, exercise} = props
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = (props) => {
  const { course } = props
  const parts = course.parts
  return (
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}

export default Content