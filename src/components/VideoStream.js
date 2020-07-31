import React, {useEffect, useCallback, useState,useRef} from "react";
import Webcam from "react-webcam";
import Button from "../styledElements/Button";
import {useDispatch, useSelector} from "react-redux";
import {updateQuestion} from "../redux/questionsSlice";
import {increment} from "../redux/questionNumberSlice";
import {showTitle, removeTitle} from "../redux/questionTitleSlice";
import {useHistory} from "react-router-dom";
import Loader from "react-loader-spinner";

// only problem left is react warning of state updating on unmount when redirect
// to /review

const Stream = ({setIsTitleOpen}) => {
    const [startedInterview, setStartedInterview] = useState(false);
    const [blob, setBlob] = useState({});
    const [videoLoaded, setVideoLoaded] = useState(false);
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const {questions, questionNumber} = useSelector(
        ({questions, questionNumber}) => {
            return {questions, questionNumber};
        },
    );
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(updateQuestion({
            blob,
            questionNumber: questionNumber - 1,
        }));
        dispatch(
            showTitle(questions.find((question) => question.id === questionNumber)),
        );
        setTimeout(() => {
            setIsTitleOpen(false);
            setTimeout(() => {
                dispatch(removeTitle());
            }, 1100);
        }, 3000);
    }, [blob]);

    const handelDataAvailable = (e) => {
        setBlob(e.data);
    };

    const handleStartRecording = useCallback(() => {
        mediaRecorderRef.current = new window.MediaRecorder(
            webcamRef.current.stream,
            {
                mimeType: "video/webm",
            },
        );
        mediaRecorderRef.current.start();
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handelDataAvailable,
        );
    }, [mediaRecorderRef]);

    const handleStopRecording = useCallback(() => {
        mediaRecorderRef.current.stop();
    }, [mediaRecorderRef]);

    const handleClick = () => {
        handleStopRecording();
        dispatch(increment());
        if (questionNumber <= questions.length) {
            setIsTitleOpen(true);
            handleStartRecording();
        }
    };

    return (
        <>
            <Webcam
                mirrored={true}
                playsInline={false}
                audio={true}
                ref={webcamRef}
                onUserMedia={() => {
                    setVideoLoaded(true);
                }}
            />
            {startedInterview
                ? (
                    <>
                        {questionNumber <= questions.length
                            ? (
                                <Button
                                    color="warning"
                                    onClick={handleClick}
                                >
                                    {questionNumber < questions.length
                                        ? "Next Question"
                                        : "Stop Recording"}
                                </Button>
                            )
                            : (
                                <Button
                                    color="success"
                                    onClick={() => history.push("/review")}
                                >
                  Review
                                </Button>
                            )}
                    </>
                )
                : videoLoaded
                    ? (
                        <Button
                            color="primary"
                            onClick={() => {
                                setStartedInterview(true);
                                handleStartRecording();
                                dispatch(
                                    showTitle(
                                        questions.find((question) => question.id === questionNumber),
                                    ),
                                );
                                setIsTitleOpen(true);
                                setTimeout(() => {
                                    setIsTitleOpen(false);
                                    setTimeout(() => {
                                        dispatch(removeTitle());
                                    }, 1100);
                                }, 3000);
                            }}
                        >
            Start Recording
                        </Button>
                    )
                    : (
                        <Button
                            color="primary"
                        >
                            <Loader
                                type="TailSpin"
                                color="#00BFFF"
                                height={50}
                                width={50}
                            />
                        </Button>
                    )}
        </>
    );
};

export default Stream;
