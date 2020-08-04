import React from "react";
import Progress from "../elements/Progress";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

// steps should be an array of objects with properties 
// question:string,answered:boolean


const ProgressStep = ({steps}) => {
    return steps && Array.isArray(steps) 
        ? (
            <div>
                <Progress>
                    {steps.map((step,index)=>{
                        return(
                            <li className={step.answered ? "done" : ""} key={index}>
                                <div>
                                    <span>{step.question}</span>
                                </div>
                            </li>
                        );
                    })}
                </Progress>
            </div>
        )
        : null;
};

export default ProgressStep;
