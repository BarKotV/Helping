import { combineReducers} from "redux";
import formReducer from "./app/form/duck";
import moviesReducer from "./app/movies/duck";

const rootReducer = combineReducers({
    form: formReducer,
    movies: moviesReducer
});

export default rootReducer