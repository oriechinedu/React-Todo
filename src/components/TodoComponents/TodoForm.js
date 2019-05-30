import React from 'react'
import './Todo.css'

export default function todoForm({newTodo, changeHandler, addTodo, clearCompleted}) {
  return (
    <form>
      <input 
        value={newTodo}
        onChange={changeHandler}
        placeholder="Add todo"
      />
      <div className="row">
      <button 
      onClick={addTodo}
      >
      Add Todo
      </button>
      <button 
      onClick={clearCompleted}
      >
      Clear Completed
      </button>
      </div>
    </form>
  )
}