import Adverts from "./adverts";
import Router from "preact-router";
import Home from "./home";

const App = () => {
   return <Router>
      <Home default path="/home" />
      <Adverts path="/adverts" />
   </Router>
}

export default App;
