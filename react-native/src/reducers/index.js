import { combineReducers } from "redux"
import navigationData from "../navigation/reducers"
import {topFilmsData} from "../screens/Home/reducers/top_films.js"
import {homeGenresData} from "../screens/Home/reducers/home_genre.js"

export default combineReducers({
    navigationData,
    topFilmsData,
    homeGenresData
});
