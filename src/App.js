import { useState } from "react";
import "./App.css";
import DisplayToDo from "./components/displaytodo";
import Sidebar from "./components/sidebar";
import SidebarMenu from './components/sidebarMenu';
// import {Route, BrowserRouter as Router} from "react-router-dom";
import Add from "./components/add";
import { CSSTransition } from "react-transition-group";
import './style.css';


function App() {

  let isVisible = false;

  const [todo, setTodo] = useState({});
  const [isAddComponentVisible, setVisibilty] = useState(isVisible);

  return (
    <div className="App">
      <SidebarMenu></SidebarMenu>
      {/* Passed the setTheTodo function that takes a todos parameter to Sidebar component*/}
      <Sidebar setTodo={setTodo}> </Sidebar>

      {/* Passed the todo state as props */}
      <DisplayToDo todo={todo}></DisplayToDo>

      <CSSTransition 
        in={isAddComponentVisible}
        timeout={500}
        classNames="my-node"
        unmountOnExit
        >   
        <Add close={setVisibilty} isClosed={isAddComponentVisible}></Add>
      </CSSTransition>

      <button onClick={()=> setVisibilty(!isAddComponentVisible)}>Hello</button>

    </div>
  );
}


export default App;
