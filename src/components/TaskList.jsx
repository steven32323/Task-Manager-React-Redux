import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../store";
import classes from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.task);
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const applyFilter = (task) => {
    if (filterState === "all") return true;
    if (filterState === "complete") return task.completed;
    if (filterState === "incomplete") return !task.completed;
  };

  const filteredTasks = tasks.filter(applyFilter);

  const deleteTaskHandler = (id) => {
    dispatch(taskActions.deleteTask(id));
  };

  const toggleCheckbox = (id) => {
    dispatch(taskActions.toggleCheckbox(id));
  };

  const showTasks = filteredTasks.map((task) => {
    return (
      <li key={task.id}>
        {task.title}
        <span
          className={classes.checkbox}
          onClick={() => toggleCheckbox(task.id)}
        >
          {task.completed ? "☑" : "☐"}
        </span>
        <button onClick={() => deleteTaskHandler(task.id)}>Delete Task</button>
      </li>
    );
  });

  return (
    <div className={classes.itemList}>
      <ul>{showTasks}</ul>
    </div>
  );
};

export default TaskList;
