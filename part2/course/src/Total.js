import React from 'react'

const Total = (props) => {
  const { course } = props
  const parts = course.parts
  //const total = /*parts[0].exercises + parts[1].exercises + parts[2].exercises*/
  const total = parts.reduce((total, cur) => {
    console.log(`what the hell is total: ${total} and cur: ${cur}`)
    return total + cur
  })

  return (
    <p>
      {total}
    </p>
  )
}

export default Total