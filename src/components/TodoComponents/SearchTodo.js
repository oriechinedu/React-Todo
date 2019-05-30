import React from 'react'
import './Todo.css'

export default function searchTodo({ msg, searchHandler}) {
  return (
    <div className="search">
      <input  onChange={searchHandler} placeholder="search todo..."/>
      <p>{msg}</p>
    </div>
  )
}