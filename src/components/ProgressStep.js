import React from "react";
import Progress from "../styledElements/Progress";
import {useSelector} from "react-redux";

const ProgressStep = ({handleClick,clickable}) => {
    const {questions} = useSelector(({questions})=> ({questions}));

    return questions
        ? (
            <>
                <Progress>
                    {questions?.map((question,index)=>{
                        return(
                            <li className={question.answered 
                                ? "done" 
                                : ""
                            } key={index}>
                                <div onClick={clickable 
                                    ? ()=> {
                                        handleClick(question.id);
                                    }
                                    : null
                                }>
                                    <span>{question.title}</span>
                                </div>
                            </li>
                        );
                    })}
                </Progress>
            </>
        )
        : null;
};


export default ProgressStep;
