import {
    GET_PIKACHU_DETAILS_SUCCESS,
    GET_PIKACHU_DETAILS_FAILURE
  } from "./pikachudetails.types";

  import axios from "axios";


const showPikaChuDetails = (id) => dispatch => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url).then(response => {
      if (response) {
        dispatch({
          type: GET_PIKACHU_DETAILS_SUCCESS,
          payload: response.data
        });
      } else {
        dispatch({
          type: GET_PIKACHU_DETAILS_FAILURE,
          payload: response
        });
      }
    });
  }

  export {showPikaChuDetails}