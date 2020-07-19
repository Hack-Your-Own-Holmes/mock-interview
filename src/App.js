import React from "react";
import "./styles/main.css";
import {getQuestions} from "./services/questions";

function App() {
    const handleGet = () => {
        getQuestions().then((questions) => {
            console.log(questions);
        });
    };
    return (
        <div>
            <button onClick={handleGet}>Get questions</button>
        </div>
    );
}

export default App;
