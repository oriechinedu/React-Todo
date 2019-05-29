import React from 'react'
import './Todo.css'

export default function todo({ todo, completeHandler }) {
  return (
    <li
      className={todo.completed ? 'completed' : ''}
      onClick={completeHandler}
      data-id={todo.id}
      >{todo.task}</li>
  )
}