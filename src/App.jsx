import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <>
      <Header />
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </>
  );
}

export default App;
