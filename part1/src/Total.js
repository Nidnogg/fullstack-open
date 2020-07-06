import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
  const { course } = props
  const parts = course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>
      {total}
    </p>
  )
}

export default Total