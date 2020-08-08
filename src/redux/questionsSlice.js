import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getQuestions} from "../services/questions";

export const setupQuestions = createAsyncThunk("setupQuestions;", async ()=>{
    const {personal} = await getQuestions();
    const questions = [];
    for(const id in personal){
        questions.push({id: Number(id),title:personal[id],answered:false,blob:null});
    }
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
        [setupQuestions.fulfilled]: (state,action) => action.payload,
    }
});

export const {updateQuestion,clearQuestions} = questionsSlice.actions;
export default questionsSlice;
