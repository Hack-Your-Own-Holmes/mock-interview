import React from "react";
import "./styles/globals.css";
import WelcomeScreen from "./scenes/WelcomeScreen";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<ThemeProvider theme={themes}>
			<Switch>
				<Route exact path='/' component={WelcomeScreen} />
				<div>{/* <WebcamStreamCapture /> */}</div>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
