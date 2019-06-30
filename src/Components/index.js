import React from "react";

export default props => (
  <div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "spaceAround",
        alignItems: "flexEnd",
        alignContent: "spaceAround"
      }}
    >
      <div
        style={{
          textDecoration: props.todo.complete ? "line-through" : ""
        }}
        onClick={props.toggleComplete}
      >
        <div
          style={{
            fontSize: 20,
            paddingRight: 30,
            paddingLeft: 50,
            paddingTop: 18,
            color: "grey"
          }}
        >
          Title:{" "}
          <p style={{ color: "black", fontSize: 20 }}>
            <i>{props.todo.todoTitle}</i>
          </p>
        </div>
        <div
          style={{
            color: "black",
            fontSize: 20,
            paddingRight: 30,
            paddingLeft: 50,
            color: "grey"
          }}
        >
          Text:{" "}
          <p style={{ color: "black", fontSize: 20 }}>
            <i>{props.todo.todoText}</i>
          </p>
        </div>
        <div style={{ paddingLeft: 50 }}>
          <button style={{ fontSize: "1em" }} onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
