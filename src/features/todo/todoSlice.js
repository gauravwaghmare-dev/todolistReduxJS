import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todolist: [{ id: 1, name: "hello World" }],
};

createAsyncThunk("fetchdata");
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        name: action.payload,
      };
      state.todolist.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );
    },
    extraReducers: () => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
