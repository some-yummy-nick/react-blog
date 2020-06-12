import React from "react";
import {Switch, Route} from "react-router-dom";
import Posts from "components/Posts/Posts";
import NotFound from "components/NotFound/NotFound";
import Header from "components/Header/Header";
import Login from "components/Login/Login";
import Logout from "components/Logout/Logout";

export const App = () =>
    <>
        <Header/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Posts}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                <Route path="/" component={NotFound}/>
            </Switch>
        </div>
    </>;

export default App;
