import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* background-color: red; */
  background-color: #cccccc;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
`;

export default function Add(props) {
  return (
    <Div>
      <h1> Add Task </h1>
    </Div>
  );
}
