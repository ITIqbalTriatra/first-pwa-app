import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MessageState = {
  count: number;
  user: {
    name: string;
    date: string;
  };
};

const initialState = {
  count: -1,
  user: {
    name: "",
    date: "0",
  },
} as MessageState;

export const messageSlice = createSlice({
  name: "Messages",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    addDate: (state, action: PayloadAction<string>) => {
      state.user.date = action.payload;
    },
    startCount: (state) => {
      state.count = 5;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { addName, addDate, startCount, decrementCount } =
  messageSlice.actions;
export default messageSlice.reducer;
