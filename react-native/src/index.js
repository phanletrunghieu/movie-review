import React, { Component } from "react";
import { Root } from "native-base"
import { Provider } from "react-redux";
import myStore from "./myStore";
import ApplicationNavigator from "./navigation/containers";

export default class MyApp extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <Root>
                    <ApplicationNavigator />
                </Root>
            </Provider>
        );
    }
}