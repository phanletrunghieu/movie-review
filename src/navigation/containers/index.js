import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from '../navigators'

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.navigationData,
});
export default AppWithNavigationState = connect(mapStateToProps)(App);