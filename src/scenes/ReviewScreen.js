import React,{useEffect} from 'react';
import ProgressStep from "../components/ProgressStep";
import {useSelector,useDispatch} from "react-redux";
import {useHistory,Redirect} from "react-router-dom";
import VideoPlayback from "../components/VideoPlayback";
import {reset} from "../redux/questionNumberSlice";
import Review from "../styledElements/Review";
import Button from '../styledElements/Button';

const ReviewScreen = () => {
    const [question,setQuestion]=React.useState({});
    const {questions} = useSelector(({questions})=> ({questions}));
    const dispatch = useDispatch();
    const someFunc=(id=1)=>{
        setQuestion(questions.find((question)=> question.id === id));
    };
    const history = useHistory();
    useEffect(()=>{
        dispatch(reset());
        someFunc();
       
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
            <ProgressStep someFunc={someFunc} clickable={true} />
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
