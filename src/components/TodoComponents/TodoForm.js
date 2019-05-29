import React from 'react'

export default function todoForm({newTodo, changeHandler, addTodo, clearCompleted}) {
  return (
    <form>
      <input 
        value={newTodo}
        onChange={changeHandler}
      />
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
    </form>
  )
}