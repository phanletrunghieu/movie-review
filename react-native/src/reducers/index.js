import { combineReducers } from "redux"
import navigationData from "../navigation/reducers"
import homeData from "../screens/Home/reducers"

export default combineReducers({
    navigationData,
    homeData,
});
