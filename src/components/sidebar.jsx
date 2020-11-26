import { useEffect, useState } from "react";
import styled from "styled-components";
import Add from "./add";
import { Animated } from "react-animated-css";
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
  /* flex: 1; */
`;

const Button = styled.button`
  background-color: ${(props) => (props.add ? "#80C767" : "red")};
  padding: 10px 20px;
  text-transform: uppercase;
  border: none;
  margin: 10px 10px;
  flex: 1;
`;
const TodoContainer = styled.div`
  margin: 0px 10px;
`;

const ButtonContainers = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;
const TodoItems = styled.div`
  padding: 1px;
  display: block;
  width: 100%;
  background-color: #134c6f;
  color: white;
  margin-bottom: 10px;
`;

// Styles

export default function Sidebar(props) {
  const [addVisible, setAddVisible] = useState(false);

  let todos = [
    {
      id: 1,
      text: "Angelo",
    },
    {
      id: 2,
      text: "Zuniga",
    },
    {
      id: 3,
      text: "Blabla",
    },
  ];

  let showAdd = () => {
    setAddVisible(!addVisible);
    console.log(!addVisible);
  };

  const [clickedDiv, setClickedDiv] = useState(1);

  let changeActive = (todo) => {
    setClickedDiv(todo.id);
  };

  useEffect(() => {
    console.log(clickedDiv);
  });

  return (
    <SidebarDiv>
      <Title>Projects</Title>
      <ButtonContainers>
        <Button add onClick={showAdd}>
          {" "}
          Add{" "}
        </Button>
        <Button> Sort by </Button>
      </ButtonContainers>

      <TodoContainer>
        {todos.map((todo) => {
          return (
            // The function setTheTodo was initiated when the user clicks a TodoItem component and
            // passed the todo object as parameter
            <Todos
              todo={todo}
              setTheTodo={props.setTheTodo}
              setClickedDiv={setClickedDiv}
              clickedDiv={clickedDiv}
            />
          );
        })}
      </TodoContainer>

      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={addVisible}
      >
        <Add> blabla </Add>
      </Animated>
    </SidebarDiv>
  );
}
