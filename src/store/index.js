import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTaskState = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Call the bank",
    completed: true,
  },
  {
    id: 3,
    title: "Finish the React project",
    completed: false,
  },
  {
    id: 4,
    title: "Exercise for 30 minutes",
    completed: true,
  },
  {
    id: 5,
    title: "Read a book",
    completed: false,
  },
];

const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTaskState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

const store = configureStore({
  reducer: { task: taskSlice.reducer },
});

export const taskActions = taskSlice.actions;
export default store;
// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// export const counterActions = counterSlice.actions;
// export default counterSlice.reducer;
