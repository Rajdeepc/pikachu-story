import {
  GET_PIKACHU_LIST_SUCCESS,
  GET_PIKACHU_LIST_FAILURE
} from "./pikachu.types";

const INITIAL_STATE = {
    collection: [],
    pikachuListError:{}
}

const PikaChuReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
     case GET_PIKACHU_LIST_SUCCESS:
      return {
          ...state,
          collection: action.payload.map(el => ({
            ...el,
            id: el.url.substring(34, el.url.length - 1)
        }))

      }
      
      case GET_PIKACHU_LIST_FAILURE:
          return {
              ...state,
            pikachuListError: action.payload
          }

     
     default:
      return state
    }
   }

export default PikaChuReducer;