import Experience from "./experience";
import AboutMe from "./about-me";
import Router from "preact-router";
import Literacy from "./literacy";

const App = () => (
    <div id="app">
        <Router>
            <AboutMe path="/about-me" />
            <Experience path="/experience" />
            <Literacy path="/literacy" />
            <AboutMe default />
        </Router>
    </div>
)

export default App;
