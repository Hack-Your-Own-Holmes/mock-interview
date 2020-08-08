import {createSlice} from "@reduxjs/toolkit";

const notificationSlice= createSlice({
    name:"notification",
    initialState:"",
    reducers: {
        showNotif: (state,action)=> action.payload || "All Done",
        hideNotif: ()=> ""
    }
});

export const {showNotif,hideNotif} = notificationSlice.actions;

export default notificationSlice;
