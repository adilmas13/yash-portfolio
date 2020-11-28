import Router from "preact-router";
import AsyncRoute from 'preact-async-route';

const App = () =>
    <Router>
        <AsyncRoute
            path="/home"
            getComponent={() => import('./home/index').then(module => module.default)}
            loading={() => <div>loading...</div>}
        />
        <AsyncRoute
            default
            path="/about-me"
            getComponent={() => import('./about-me/index').then(module => module.default)}
            loading={() => <div>loading...</div>}
        />
        <AsyncRoute
            path="/adverts"
            getComponent={() => import('./adverts/index').then(module => module.default)}
            loading={() => <div>loading...</div>} />
        <AsyncRoute
            path="/arts"
            getComponent={() => import('./arts/index').then(module => module.default)}
            loading={() => <div>loading...</div>} />
        <AsyncRoute
            path="/awards"
            getComponent={() => import('./awards/index').then(module => module.default)}
            loading={() => <div>loading...</div>}
        />
    </Router>


export default App;
