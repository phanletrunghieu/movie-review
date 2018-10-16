import React, { Component } from "react";
import { Provider } from "react-redux";
import myStore from "./myStore";
import ApplicationNavigator from "./navigation/containers";

export default class MyApp extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <ApplicationNavigator />
            </Provider>
        );
    }
}