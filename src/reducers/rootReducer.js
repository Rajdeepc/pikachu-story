import { combineReducers } from "redux";
import PikaChuReducer from "../components/PikachuList/pikachu.reducer";
import PikachuSearchReducer from "../components/SearchComponent/pikachuSearch.reducer";

export default combineReducers({
  PikaChuReducer,
  PikachuSearchReducer
});
