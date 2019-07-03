import { SEARCH_VALUE_TEXT } from './pikachuSearch.types';


const INITIAL_STATE = {
    searchValue:null
}
const PikachuSearchReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case SEARCH_VALUE_TEXT: 
        return {
            ...state,
            searchValue: action.payload
        }
        default:
            return state

    }
}

export default PikachuSearchReducer;