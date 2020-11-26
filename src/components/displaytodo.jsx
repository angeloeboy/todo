import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 80vw;
  float: right;
  /* background-color: red; */
  margin: none;
  padding: 20px;
`;

export default function DisplayToDo(props) {
  return (
    <Div>
      <h1>{props.todo.id} </h1>
      <p>{props.todo.text}</p>
    </Div>
  );
}
