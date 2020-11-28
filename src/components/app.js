import Adverts from "./adverts";
import Router from "preact-router";
import AboutMe from "./about-me";
import Home from "./home";
import Arts from "./arts";
import Awards from "./awards";
import React from "preact";

const App = () => {
    return <Router>
        <Home path="/home" />
        <AboutMe default path="/about-me" />
        <Adverts path="/adverts" />
        <Arts path="/arts" />
        <Awards path="/awards" />
    </Router>
}

export default App;
