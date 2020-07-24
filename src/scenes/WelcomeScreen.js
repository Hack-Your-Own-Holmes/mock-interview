import React from "react";
import Button from "../elements/Button";
import {Welcome} from "../elements/Welcome";

const WelcomeScreen = () => {
    return (
        <Welcome>
            <h1>Mock Interview</h1>
            <p>
        See how you would do during an interview by practicing with our
        interview questions
            </p>
            <Button color="primary">Let's Go</Button>
        </Welcome>
    );
};

export default WelcomeScreen;
