import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store";

const TaskInput = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") return;

    const newTaskData = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    dispatch(taskActions.addTask(newTaskData));
    setNewTask("");
  };

  return (
    <form onSubmit={addTaskHandler}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskInput;
