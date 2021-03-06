import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Loadable from "react-loadable";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const DefaultLayout = Loadable({
    loader: () => import("../layouts/default"),
    loading
});

const Login = Loadable({
    loader: () => import("../views/pages/Login"),
    loading
});
const Register = Loadable({
    loader: () => import("../views/pages/Register"),
    loading
});

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" name="Home" component={RoutedComponents} />
                </Switch>
            </HashRouter>
        );
    }
}

class RoutedComponents extends React.Component<{ history?: any }, {}> {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/register" name="Register Page" component={Register} />
                <Route exact={true} path="/login" name="Login Page" component={Login} />
                <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        );
    }
}
