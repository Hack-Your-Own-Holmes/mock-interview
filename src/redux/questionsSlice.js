import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getQuestions = createAsyncThunk("getQuestions", async ()=>{
    // aws function will be called here and return array
    // of questions;
    const response = await window.fetch("http://localhost:3001/questions");
    const questionsArr = await response.json();
    const questions = questionsArr.map((question)=>{
        return {...question,answered:false,blob:null};
    });
    return questions;
});


const questionsSlice = createSlice({
    name:"questions",
    initialState:[],
    reducers:{
        updateQuestion: (state,action)=>{
            return state.map((question)=>{
                return question.id === action.payload.questionNumber
                    ? {
                        ...question,
                        answered:true,
                        blob: action.payload.blob
                    }
                    : question;
            });
        },
        clearQuestions: () => [],
    },
    extraReducers:{
        [getQuestions.fulfilled]: (state,action) => action.payload,
    }
});

export const {updateQuestion} = questionsSlice.actions;
export default questionsSlice;
