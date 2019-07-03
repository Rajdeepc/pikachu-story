import { GET_PIKACHU_LIST_SUCCESS,GET_PIKACHU_LIST_FAILURE } from './pikachu.types';


const INITIAL_STATE = {
    collection: {},
    pikachuListError:{},
}

const PikaChuReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
     case GET_PIKACHU_LIST_SUCCESS:
      return {
          ...state,
          collection: {
            ...state.collection,
            ...action.payload.reduce((accumulator, item) => {
              const { url } = item
              const id = url.substring(34, url.length - 1)
  
              return {
                ...accumulator,
                [id]: {
                  id,
                  ...item
                }
              }
            }, {})
          },
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