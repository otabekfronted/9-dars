// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 100;
        },
        decrement: (state) => {
            state.value -= 55; // To‘g‘rilangan decrement
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

// Actionlarni va reducerni eksport qilish
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
