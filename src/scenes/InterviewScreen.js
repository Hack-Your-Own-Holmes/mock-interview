import React,{useEffect, useState} from 'react';
import ProgressStep from "../components/ProgressStep";
import {getQuestions} from "../redux/questionsSlice";
import VideoStream from "../components/VideoStream";
import store from "../redux/store";
import Interview from "../styledElements/Interview";
import QuestionTitle from "../styledElements/QuestionTitle";
import {useSelector} from "react-redux";

const InterviewScreen = () => {
    useEffect(()=>{
        store.dispatch(getQuestions());
    },[]);
    const questionTitle = useSelector((state)=> state.questionTitle);
    const [IsTitleOpen, setIsTitleOpen] = useState(false);
    
    return (
        <Interview>
            <QuestionTitle IsTitleOpen={IsTitleOpen}>
                {questionTitle}
            </QuestionTitle>
            <ProgressStep />
            <VideoStream setIsTitleOpen={setIsTitleOpen} />
        </Interview>
    );
};


export default InterviewScreen;
