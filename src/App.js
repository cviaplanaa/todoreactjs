import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    };
  }

//Añade a la array de todos el nuevo todo
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  //Método filter hace como un for, pero si un método no cumple con la función no lo agrega
removeTodo(index){
  if(window.confirm('¿Estás seguro?')){
  this.setState({
    todos: this.state.todos.filter((e,i)=> {
      //si una tarea es distinta al índice que le damos, la va a devolver
      return i !== index
    })
  })
}
}

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        //key={i} asigna un índice por cada iteración realizada por el .map
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Borrar
          </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tareas
          <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>


      </div>
    );
  }
}

export default App;
