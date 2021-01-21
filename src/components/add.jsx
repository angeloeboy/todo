import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* background-color: red; */
  background-color: #cccccc;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  position: absolute;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Add(props) {
  return (
    <Div>
      <h1>Angelo</h1>

      <p onClick={() => props.close(!props.isClosed)}>close</p>
    </Div>
  );
}
