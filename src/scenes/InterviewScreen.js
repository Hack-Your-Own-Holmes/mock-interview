import React,{useEffect, useState} from 'react';
import ProgressStep from "../components/ProgressStep";
import {setupQuestions} from "../redux/questionsSlice";
import VideoStream from "../components/VideoStream";
import store from "../redux/store";
import Interview from "../styledElements/Interview";
import Notification from "../styledElements/Notification";
import {useSelector} from "react-redux";

const InterviewScreen = () => {
    useEffect(()=>{
        store.dispatch(setupQuestions());
    },[]);
    const {notification} = useSelector((state)=> state);
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Interview>
            <Notification isOpen={isOpen}>
                {notification}
            </Notification>
            <ProgressStep />
            <VideoStream setIsOpen={setIsOpen} />
        </Interview>
    );
};


export default InterviewScreen;
