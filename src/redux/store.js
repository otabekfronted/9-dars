// store.js
import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../redux/counterScilse"; // Reducerni import qilish
import studentSlice from "./studentSlice";

export const store = configureStore({
    reducer: {
        // counter: counterSlice, // To‘g‘ri reducerni o‘rnatish
        cart: studentSlice,
    },
});
