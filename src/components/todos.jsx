import React from "react";
import styled from "styled-components";

const TodoItems = styled.div`
  padding: 1px;
  display: block;
  width: 100%;
  background-color: #134c6f;
  color: white;
  margin-bottom: 10px;
`;

export default function Todos(props) {
  let handleOnClick = () => {
    props.setTheTodo(props.todo);
    props.setClickedDiv(props.todo.id);
  };
  return (
    <TodoItems
      onClick={handleOnClick}
      style={
        props.clickedDiv === props.todo.id
          ? { backgroundColor: "pink" }
          : { backgroundColor: "#134c6f" }
      }
    >
      <p>{props.todo.id}</p>
      <p>{props.todo.text}</p>
    </TodoItems>
  );
}
