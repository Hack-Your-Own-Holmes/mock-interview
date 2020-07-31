import {createSlice} from "@reduxjs/toolkit";

const questionNumberSlice = createSlice({
    name: 'questionNumber',
    initialState: 1,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        reset: ()=> 1
    }
});

export const {increment,reset} = questionNumberSlice.actions;

export default questionNumberSlice;
