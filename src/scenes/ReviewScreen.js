import React,{useEffect,useState} from 'react';
import ProgressStep from "../components/ProgressStep";
import {useSelector,useDispatch} from "react-redux";
import {useHistory,Redirect} from "react-router-dom";
import VideoPlayback from "../components/VideoPlayback";
import {reset} from "../redux/questionNumberSlice";
import Review from "../styledElements/Review";
import Button from '../styledElements/Button';
import {showNotif,hideNotif} from "../redux/notification";
import Notification from "../styledElements/Notification";

const ReviewScreen = () => {
    const [question,setQuestion]= useState({});
    const [isOpen, setIsOpen] = useState(false);
    const {questions,notification} = useSelector(({questions,notification})=> ({questions,notification}));
    const dispatch = useDispatch();
    const handleClick=(id=1)=>{
        setQuestion(questions.find((question)=> question.id === id));
    };
    const history = useHistory();
    useEffect(()=>{
        dispatch(reset());
        handleClick();
        dispatch(showNotif("Click the slider on top to review your questions"));
        setTimeout(()=>{
            setIsOpen(false);
            setTimeout(()=>{
                dispatch(hideNotif());
            },1100);
        },2000);
        
       
    },[]);

    if(questions.length<1 || !questions.every((question)=> question.answered)){
        return <Redirect to="/interview" />;
    }

    // concatenate blobs
    const downloadAll=()=>{
        window.alert("Coming soon");
        // const allBlobs = questions.map((question)=> question.blob);
        // // console.log(allBlobs);
        // const blob = new Blob(allBlobs, {
        //     type: "video/webm",
        // });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement("a");
        // document.body.appendChild(a);
        // a.style.display = "none";
        // a.href = url;
        // a.download = "Mock Interview";
        // a.click();
        // a.remove();
        // window.URL.revokeObjectURL(url);        
    };

    return (
        <Review>
            <ProgressStep handleClick={handleClick} clickable={true} />
            <Notification isOpen={isOpen}>
                {notification}
            </Notification>
            <VideoPlayback blob={question?.blob} />
            <div className="buttons">
                <Button onClick={downloadAll}
                    color="success">
                        Download All
                </Button>
                <Button 
                    onClick={()=> history.push("/interview")} 
                    color="dark">
                        Retake Interview
                </Button>
            </div>
        </Review>
    );
};

export default ReviewScreen;
