import {
    GET_PIKACHU_DETAILS_SUCCESS,
    GET_PIKACHU_DETAILS_FAILURE
  } from "./pikachudetails.types";


  const INITIAL_STATE = {
    pikachuDetails:{},
    pikachuDetailsError:{}
}



const PikaChuDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PIKACHU_DETAILS_SUCCESS:
      return {
        ...state,
        pikachuDetails: action.payload
      };
    case GET_PIKACHU_DETAILS_FAILURE:
      return {
        ...state,
        pikachuDetailsError: action.payload
      };
    default:
        return state
  }
};


export default PikaChuDetailsReducer;