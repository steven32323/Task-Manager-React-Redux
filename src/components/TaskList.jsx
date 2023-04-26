import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../store";

const TaskList = () => {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  console.log(tasks);

  const deleteTaskHandler = (id) => {
    dispatch(taskActions.deleteTask(id));
  };

  const showTasks = tasks.map((task) => {
    return (
      <li key={task.id} data-completed={task.completed}>
        {task.title}{" "}
        <button onClick={() => deleteTaskHandler(task.id)}>Delete Task</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{showTasks}</ul>
    </div>
  );
};

export default TaskList;
