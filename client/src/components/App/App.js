import React from "react";
import {Switch, Route} from "react-router-dom";
import Posts from "components/Posts/Posts";
import NotFound from "components/NotFound/NotFound";

export const App = () =>
    <div className="container">
        <Switch>
            <Route exact path="/" component={Posts}/>
            <Route path="/" component={NotFound}/>
        </Switch>
    </div>;

export default App;
