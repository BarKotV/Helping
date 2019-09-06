import { combineReducers} from "redux";
import actorsReducers from "./app/actors/duck";
import moviesReducer from "./app/movies/duck";

const rootReducer = combineReducers({
    actors: actorsReducers,
    movies: moviesReducer
});

export default rootReducer