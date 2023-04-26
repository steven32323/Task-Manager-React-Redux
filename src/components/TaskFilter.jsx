import { useDispatch } from "react-redux";
import { filterActions } from "../store";

const TaskFilter = () => {
  const dispatch = useDispatch();

  const filterChangeHandler = (newFilterOption) => {
    dispatch(filterActions.setFilter(newFilterOption));
  };
  return (
    <select onChange={(e) => filterChangeHandler(e.target.value)}>
      <option value="all">All Tasks</option>
      <option value="complete">Completed Tasks</option>
      <option value="incomplete">Incomplete Tasks</option>
    </select>
  );
};

export default TaskFilter;
