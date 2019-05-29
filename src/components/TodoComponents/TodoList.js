// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

export default function todoList({ completeHandler, todos }) {
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return <Todo
            todo={todo} key={todo.id}
            completeHandler={completeHandler}
          />

        })}
      </ul>
    </div>

  )
}