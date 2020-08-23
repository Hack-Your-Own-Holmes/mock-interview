import React from "react";
import "./styles/globals.css";
import WelcomeScreen from "./scenes/WelcomeScreen";
import InterviewScene from "./scenes/InterviewScreen";
import ReviewScreen from "./scenes/ReviewScreen";
import AuthScreen from "./scenes/AuthScreen";
import {ThemeProvider} from "styled-components";
import {themes} from "./styles/theme";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={themes}>
            <Switch>
                <Route exact path="/" component={WelcomeScreen} />
                <Route path="/auth" component={AuthScreen} />
                <Route path="/interview" component={InterviewScene} />
                <Route path="/review" component={ReviewScreen} />
            </Switch>
        </ThemeProvider>
    );
}

export default App;
