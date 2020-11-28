import Adverts from "./adverts";
import Router from "preact-router";
import AboutMe from "./about-me";

const App = () => {
    return <Router>
        <AboutMe default path="/about-me" />
        <Adverts path="/adverts" />
    </Router>
}

export default App;
