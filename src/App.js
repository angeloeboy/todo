import { useState } from "react";
import "./App.css";
import DisplayToDo from "./components/displaytodo";
import Sidebar from "./components/sidebar";

function App() {
  const [todo, setTodo] = useState({});

  let setTheTodo = (todos) => {
    setTodo(todos);
  };

  return (
    <div className="App">
      {/* Passed the setTheTodo function that takes a todos parameter to Sidebar component*/}
      <Sidebar setTheTodo={setTheTodo}> </Sidebar>

      {/* Passed the todo state as props */}
      <DisplayToDo todo={todo}></DisplayToDo>
    </div>
  );
}

export default App;
