import Router from "preact-router";
import AsyncRoute from 'preact-async-route';
import Loader from "./loader";

const App = () =>
    <Router>
        <AsyncRoute
            path="/home"
            getComponent={() => import('./home/index').then(module => module.default)}
            loading={() => <Loader />}
        />
        <AsyncRoute
            default
            path="/about-me"
            getComponent={() => import('./about-me/index').then(module => module.default)}
            loading={() => <Loader />}
        />
        <AsyncRoute
            path="/adverts"
            getComponent={() => import('./adverts/index').then(module => module.default)}
            loading={() => <Loader />} />
        <AsyncRoute
            path="/arts"
            getComponent={() => import('./arts/index').then(module => module.default)}
            loading={() => <Loader />} />
        <AsyncRoute
            path="/awards"
            getComponent={() => import('./awards/index').then(module => module.default)}
            loading={() => <Loader />}
        />
    </Router>


export default App;
