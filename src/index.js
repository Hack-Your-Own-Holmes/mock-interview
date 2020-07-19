import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import videoStream from "./services/videoStream";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
