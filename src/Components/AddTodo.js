import React from "react";
import shortid from "shortid";

const initialState = {
  todoTitle: "",
  todoText: "",
  todoTitleError: "",
  todoTextError: ""
};

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  validate = () => {
    let todoTitleError = "";
    let todoTextError = "";
    if (!this.state.todoText) {
      todoTextError = "Text can not be blank.";
    }

    if (todoTitleError || todoTextError) {
      this.setState({ todoTitleError, todoTextError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      todoTitle: this.state.todoTitle,
      todoText: this.state.todoText,
      complete: false
    });
    this.setState({
      todoTitle: "",
      todoText: ""
    });

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> New Todo</h1>
        <div style={{ paddingBottom: 13 }}>
          <input
            placeholder=" Todo Title"
            name="todoTitle"
            type="text"
            value={this.state.todoTitle}
            onChange={this.handleChange}
            style={{
              width: 300,
              height: 30,
              boxShadow: "2px 2px 2px grey",
              border: "2px solid grey",
              fontSize: "1.2em"
            }}
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.todoTitleError}
          </div>
        </div>
        <div>
          <textarea
            style={{
              width: 300,
              height: 90,
              paddingBottom: 4,
              boxShadow: "2px 2px 2px grey",
              border: "2px solid grey",
              fontSize: "1.2em"
            }}
            placeholder=" Todo Text"
            name="todoText"
            type="text"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.todoTextError}
          </div>
        </div>
        <button style={{ fontSize: "1.1em" }} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default MyForm;
