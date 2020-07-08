import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  const { course } = props
  return (
    <h1>{ course.name }</h1>
  )
}

export default Header