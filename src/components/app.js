import Router from "preact-router";
import Home from "./home";
import AboutMe from "./about-me";
import Adverts from "./adverts";
import Arts from "./arts";
import Awards from "./awards";


const App = () =>
    <Router>
        <Home default path="home" />
        <AboutMe path="about-me" />
        <Adverts path="adverts" />
        <Arts path="arts" />
        <Awards path="awards" />
    </Router>


export default App;
