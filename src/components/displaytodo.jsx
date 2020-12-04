import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 70vw;
  float: right;
  /* background-color: red; */
  margin: none;
  padding: 20px;
  margin: 2rem auto;
`;

const Title = styled.h1`
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin: 0px;
`;

export default function DisplayToDo(props) {
  return (
    <Div>
      <Title>{props.todo.title} </Title>
      <p>{props.todo.text}</p>
    </Div>
  );
}
