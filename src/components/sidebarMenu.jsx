import React from "react";
import styled from "styled-components";
import todoLogo from "../images/to-do-list.svg";

const Div = styled.div`
  background-color: #17182d;
  min-height: 100%;
  min-width: 50px;
  max-width: 50px;
  display: inline-block;
  text-align: center;
  padding-top: 10px;
`;

// const P = styled.p`
//   color: pink;
// `;

const Img = styled.img`
  width: 40px;
`;

export default function SidebarMenu() {
  // let onClickHandler = () => {
  //   console.log("Angeo is the best");
  // };

  return (
    <Div>
      <Img
        src={todoLogo}
        alt="todo"
        onClick={(e) => console.log(e.currentTarget.src)}
      />
    </Div>
  );
}
