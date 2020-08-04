import ProgressStep from "../components/ProgressStep";
import React from 'react';

const Interview = () => {
    // mock question format
    const steps = [
        {
            question: "Tell us a little about yourself?",
            answered:true
        },
        {
            question: "Tell us about your skills?",
            answered:false
        },
        {
            question: "Tell us a tale?",
            answered:false
        },
    ];
    return (
        <div>
            <ProgressStep steps={steps} />
        </div>
    );
};

export default Interview;
