import "./App.css";
import DisplayToDo from "./components/displaytodo";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar> </Sidebar>
      <DisplayToDo></DisplayToDo>
    </div>
  );
}

export default App;
