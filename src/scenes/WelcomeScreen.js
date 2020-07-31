import React from "react";
import Button from "../styledElements/Button";
import {Welcome} from "../styledElements/Welcome";
import {Link} from "react-router-dom";

const WelcomeScreen = () => {
    return (
        <Welcome>
            <h1>Mock Interview</h1>
            <p>
        See how you would do during an interview by practicing with our
        interview questions
            </p>
            <Link to="/interview">
                <Button color="primary">Let's Go</Button>
            </Link>
        </Welcome>
    );
};

export default WelcomeScreen;
