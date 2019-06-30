import React from "react";
import Todo from "./index.js";
import MyForm from "./AddTodo";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = todo => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <div className="todo-list">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flexEnd",
              flexWrap: "wrap",
              justifyContent: "spaceAround",
              alignItems: "flexEnd",
              alignContent: "spaceAround"
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MyForm onSubmit={this.addTodo} />
            </div>
            <br />
            <br />
            <div style={{ color: "black" }}>
              Todos left:{" "}
              {this.state.todos.filter(todo => !todo.complete).length}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <ul>
                {this.state.todos.map(todo => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View;
