import React from "react";
import "./styles/main.css";
import { getQuestions } from "./services/questions";
import videoStream from "./services/videoStream";
import WebcamStreamCapture from "./services/videoStream";

function App() {
	const handleGet = () => {
		getQuestions().then((questions) => {
			console.log(questions);
		});
	};
	return (
		<div>
			<button onClick={handleGet}>Get questions</button>
			<WebcamStreamCapture />
		</div>
	);
}

export default App;
