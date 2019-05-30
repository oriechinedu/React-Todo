// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

export default function todoList({ completeHandler, todos, isSearching }) {
  let todoList;
  if (todos.length) {
    
    todoList = (
      <ul>
        {todos.map(todo => {
          return <Todo
            todo={todo} key={todo.id}
            completeHandler={completeHandler}
          />

        })}
      </ul>
    );
  } else if (!isSearching) {
    todoList = (<p>What would you like to do today?</p>)
  }
  return (
    <div className="todo-list">
      {todoList}
    </div>

  )
}