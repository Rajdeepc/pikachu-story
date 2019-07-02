import { SEARCH_VALUE_TEXT } from './pikachuSearch.types';


const searchedPikachuList = (value) => dispatch => {
    dispatch({
      type: SEARCH_VALUE_TEXT,
      payload: value
    })
  }

export {searchedPikachuList }