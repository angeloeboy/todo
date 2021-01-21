import styled from "styled-components";

const TodoItems = styled.div`
  padding: 5px;
  display: block;
  width: 100%;
  color: white;
  margin-bottom: 10px;
  transition: all 0.19s ease-in-out;
  border-bottom: 1px solid #acacac;
  max-height: 60px;
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
          ? { backgroundColor: "#464755" }
          : { backgroundColor: "#272838" }
      }
    >
      <p>{props.todo.title}</p>
    </TodoItems>
  );
}
