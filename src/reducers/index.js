import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  anime: animeReducer,
  form: formReducer
});
