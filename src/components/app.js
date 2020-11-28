import Adverts from "./adverts";
import Router from "preact-router";
import AboutMe from "./about-me";
import Home from "./home";

const App = () => {
    return <Router>
        <Home path="/home" />
        <AboutMe default path="/about-me" />
        <Adverts path="/adverts" />
    </Router>
}

export default App;
