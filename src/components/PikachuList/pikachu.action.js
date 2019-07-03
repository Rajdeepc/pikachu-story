import {
  GET_PIKACHU_LIST_SUCCESS,
  GET_PIKACHU_LIST_FAILURE,
} from "./pikachu.types";

import axios from "axios";

const getAllPikachu = () => dispatch => {
  const limit = 180;
  const API_END_POINT = "https://pokeapi.co/api/v2/pokemon/";
  const url = `${API_END_POINT}?limit=${limit}`;
  axios.get(url).then(response => {
    if (response.data.results.length) {
      dispatch({
        type: GET_PIKACHU_LIST_SUCCESS,
        payload: response.data.results
      });
    } else {
      dispatch({
        type: GET_PIKACHU_LIST_FAILURE,
        payload: response
      });
    }
  });
};





export { getAllPikachu };
