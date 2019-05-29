import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const Todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: Todos,
      newTodo: '',
    }
  }

  completeHandler = (event) => {

    const id = event.target.dataset.id;
    const updatedTodos = this.state.todos.map((todo => {
      if (todo.id == id) {
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
  }
  
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
