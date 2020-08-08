import {createSlice} from "@reduxjs/toolkit";

const questionTitleSlice= createSlice({
    name:"questionTitle",
    initialState:"",
    reducers: {
        showTitle: (state,action)=> action.payload?.title || "All Done",
        removeTitle: ()=> ""
    }
});

export const {showTitle,removeTitle} = questionTitleSlice.actions;

export default questionTitleSlice;
