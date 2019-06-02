import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import SearchTodo from './components/TodoComponents/SearchTodo'
import './App.css';

const App = () => {
  const initialState = {
    todos: [],
    newTodo: '',
    error: '',
    searchMessage: '',
    isSearching: false,
  }

  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    updatedTodosFromStorage()
  }, [])

  const updatedTodosFromStorage = async () => {
    const todoList = JSON.parse(localStorage.getItem('todos'));
    if (todoList.length) {
      await setState(prevState => ({
        ...prevState,
        todos: todoList
      }));
    }
  }

  const completeHandler = (id) => {
    const updatedTodos = state.todos.map((todo => {
      if (todo.id === id) {
        todo['completed'] = true;
        return todo;
      } else {
        return todo;
      }
    }));
    setState(prevState => ({
      ...prevState,
      todos: updatedTodos
    }));
    updateStorage(updatedTodos)
  }

  const addTodo = (event) => {
    event.preventDefault();
    if (state.newTodo) {
      const newTodo = {
        id: Date.now(),
        task: state.newTodo,
        completed: false,
      }
      const updatedTodos = state.todos.concat(newTodo);
      setState(prevState => ({
        ...prevState,
        todos: updatedTodos,
        newTodo: ''
      }))
      updateStorage(updatedTodos)
    } else {
      setError('you cannot add empty task')
    }
  }

  const setError = (msg) => {
    setState(prevState => ({ ...prevState, error: msg }))
    setTimeout(() => {
      setState({ ...state, error: '' })
    }, 1000)
  }

  const clearCompleted = (event) => {
    event.preventDefault();
    const uncompletedTodos = state.todos.filter(todo => {
      return !todo.completed;
    });
    setState(prevState => ({
      ...prevState,
      todos: uncompletedTodos
    }))
    updateStorage(uncompletedTodos)
  }

  const searchHandler = (event) => {
    setState(prevState => ({ ...prevState, isSearching: true }));
    const searchTerm = event.target.value;
    if (searchTerm) {
      const searchResult = state.todos.filter(todo => {
        return todo.task.includes(searchTerm)
      });
      if (searchResult.length) {
        setState(prevState => ({ ...prevState, todos: searchResult }));
      } else {
        setState(prevState => ({ ...prevState, todos: searchResult, searchMessage: `No match found for: ${searchTerm}` }));
      }
    } else {
      updatedTodosFromStorage();
      setState(prevState => ({
        ...prevState,
        isSearching: false,
        searchMessage: ''
      }));
    }
  }

  const changeHandler = (event) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, newTodo: value }));
  }

  const updateStorage = (data) => {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(data))
  }

  return (
    <div className="app">
      <h3> My Todo</h3>
      <SearchTodo searchHandler={searchHandler} msg={state.searchMessage} />
      <TodoList
        todos={state.todos}
        completeHandler={completeHandler}
        isSearching={state.isSearching}
      />
      <TodoForm
        newTodo={state.newTodo}
        changeHandler={changeHandler}
        addTodo={addTodo}
        clearCompleted={clearCompleted}
      />
      <p className="error">{state.error}</p>
    </div>
  );
}

export default App;
