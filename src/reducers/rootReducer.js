import { combineReducers } from "redux";
import PikaChuReducer from "../components/PikachuList/pikachu.reducer";
import PikachuSearchReducer from "../components/SearchComponent/pikachuSearch.reducer";
import PikaChuDetailsReducer from "../components/PikachuDetails/pikachudetails.reducer";

export default combineReducers({
  PikaChuReducer,
  PikachuSearchReducer,
  PikaChuDetailsReducer
});
