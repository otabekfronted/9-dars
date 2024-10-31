import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        { id: Date.now(), name: "Susambil", price: 18000 },
        { id: Date.now(), name: "Oq kema", price: 20000 },
    ],
};

export const studentSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        remove: (state, action) => {
            state.value = state.value.filter(
                (item) => item.id !== action.payload
            );
        },
        clear: (state) => {
            state.value = [];
        },
        update: (state, action) => {
            state.value = state.value.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
    },
});

export const { add, remove, clear, update } = studentSlice.actions;
export default studentSlice.reducer;
