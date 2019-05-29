import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      error: ''
    }
  }

  completeHandler = (event) => {
    const id = Number(event.target.dataset.id);
    const updatedTodos = this.state.todos.map((todo => {
      if (todo.id === id) {
        todo['completed'] = true;
        return todo;
      } else {
        return todo;
      }
    }));
    this.setState({ todos: updatedTodos });

  }
  changeHandler = (event) => {
    const value = event.target.value;
    this.setState({ newTodo: value });
  }

  addTodo = (event) => {
    event.preventDefault();
    if (this.state.newTodo) {
      const newTodo = [
        {
          id: Date.now(),
          task: this.state.newTodo,
          completed: false,
        }
      ];
      
      this.setState({
        todos: this.state.todos.concat(newTodo),
        newTodo: ''
      })
    } else {
      this.setError('you cannot add empty task')
    }
  }
  clearCompleted = (event) => {
    event.preventDefault();
    const uncompletedTodos = this.state.todos.filter(todo => {
      return !todo.completed;
    });
    this.setState({
      todos: uncompletedTodos
    })
  }

  setError = (msg) => {
    this.setState({error: msg})
    setTimeout(() => {
      this.setState({error: ''})
    }, 1000)
  }
  
  render() {
    return (
      <div className="app">
        <h3> My Todo</h3>
        <TodoList
          todos={this.state.todos}
          completeHandler={this.completeHandler}
        />
        <TodoForm
          newTodo={this.state.newTodo}
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <p className="error">{this.state.error}</p>
      </div>
    );
  }
}

export default App;
