import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

const App = () => {
   const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      id: 1,
      name: 'The Joy of Painting',
      parts: [
        {
          name: 'Fundamentals of oil paints',
          exercises: 12,
          id: 1
        },
        {
          name: 'How to size your Canvas',
          exercises: 19,
          id: 2
        },
        {
          name: 'State of the art',
          exercises: 30,
          id: 3
        }
      ]
    }
  ]
  
  return (
    <>
      {courses.map(course => {
        return <Course key={course.id} course={course}/>
      })}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))