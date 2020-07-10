import React from 'react'

const Total = (props) => {
  const { course } = props
  const parts = course.parts

  const total = parts.reduce((total, cur) => {
    console.log(`what the hell is total: ${total} and cur: ${cur}`)
    return total + cur.exercises
  }, 0)

  return (
    <h3>
      total of {total} exercises
    </h3>
  )
}

export default Total