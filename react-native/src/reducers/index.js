import { combineReducers } from "redux"
import navigationData from "../navigation/reducers"
import {topFilmsData} from "../screens/Home/reducers/top_films.js"
import {homeGenresData} from "../screens/Home/reducers/home_genre.js"
import {likedFilmsData} from "../screens/ProfileScreen/reducers/liked_films"
import {favoriteFilmsData} from "../screens/ProfileScreen/reducers/favorite_film"
import {reviewData} from "../screens/Review/reducers/review_film"
import {searchData} from "../screens/SearchInput/reducers/search"

export default combineReducers({
    navigationData,
    topFilmsData,
    homeGenresData,
    likedFilmsData,
    favoriteFilmsData,
    reviewData,
    searchData,
});
