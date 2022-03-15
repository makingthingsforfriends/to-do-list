import "./App.css";
import Contacts from "./components/Contacts";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>All my to-dos</h1>
      <ToDoList />
      <h1>People to call today!</h1>
      <Contacts />
    </div>
  );
}

export default App;
