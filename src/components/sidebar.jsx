import { useEffect, useState } from "react";
import styled from "styled-components";
// import Add from "./add";
// import { Animated } from "react-animated-css";
// import SidebarMenu from "./sidebarMenu";
import Todos from "./todos";

// import axios from "axios";

// Styles
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 auto;
  color: white;
  padding: 25px;
  text-align: center;
`;

const SidebarDiv = styled.div`
  background-color: #272838;
  height: 100vh;
  max-width: 20vw;
  min-width: 300px;
  display: inline-block;
`;

// const Button = styled.button`
//   background-color: ${(props) => (props.add ? "#80C767" : "red")};
//   padding: 10px 20px;
//   text-transform: uppercase;
//   border: none;
//   margin: 10px 10px;
//   flex: 1;
// `;
const TodoContainer = styled.div`
  margin: 30px 10px;
`;

// const ButtonContainers = styled.div`
//   display: flex;
//   width: 90%;
//   margin: 0 auto;
// `;

// Styles

export default function Sidebar(props) {
  let todos = [
    {
      id: 1,
      title: "Math Notes Video",
      text:
        "Fugiat aliqua dolore officia Lorem labore veniam elit excepteur aute occaecat fugiat aliquip mollit nostrud. Ea aute in adipisicing proident ut culpa ex veniam anim. Est amet dolore occaecat ea duis. Anim eiusmod culpa eu nulla. Pariatur sint laboris excepteur nostrud sint ea proident sunt anim dolor proident cupidatat ad. In aute laboris nulla proident cupidatat fugiat officia cillum dolor cupidatat labore ex. Velit id tempor ipsum aliquip commodo eiusmod aute nulla commodo duis velit id.",
    },
    {
      id: 2,
      title: "Add border",
      text: "Zuniga",
    },
    {
      id: 3,
      title: "Delete background color",
      text: "Blabla",
    },
  ];

  // let showAdd = () => {
  //   setAddVisible(!addVisible);
  //   console.log(!addVisible);
  // };

  const [clickedDiv, setClickedDiv] = useState(1);
  const [todoClicked, setTodoClicked] = useState(todos[0]);

  let setTheTodo = (todo) => {
    props.setTodo(todoClicked);
  };

  useEffect(() => {
    setTheTodo();
    // console.log(clickedDiv);
  });

  return (
    <SidebarDiv>
      <Title>Projects</Title>
      <TodoContainer>
        {todos.map((todo) => {
          return (
            // The function setTheTodo was initiated when the user clicks a TodoItem component and
            // passed the todo object as parameter

            <Todos
              todo={todo}
              setTheTodo={setTodoClicked}
              setClickedDiv={setClickedDiv}
              clickedDiv={clickedDiv}
            />
          );
        })}
      </TodoContainer>
    </SidebarDiv>
  );
}
