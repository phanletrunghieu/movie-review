import React from 'react'
import {BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from '../navigators'

const mapStateToProps = (state) => ({
    state: state.navigationData,
});

const ReduxAppNavigator = reduxifyNavigator(AppNavigator, "root");

// create nav component
class App extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
  
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    
    shouldExit(state){
        if (state.index === 0) {
            return true;
        }

        if (state.routes[state.index].index === 0) {
            return true;
        }

        return false;
    }
  
    onBackPress = () => {
        const { dispatch, state } = this.props;
        if (this.shouldExit(state)) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    };
  
    render() {
        const { dispatch, state } = this.props;
        return <ReduxAppNavigator state={state} dispatch={dispatch} />;
    }
}

export default AppWithNavigationState = connect(mapStateToProps)(App);