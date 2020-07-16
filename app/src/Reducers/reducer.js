import {
    FETCH_MISSIONS_START,
    FETCH_MISSIONS_SUCCESS,
    FETCH_MISSIONS_FAILURE
  } from "../Actions/action";
  
  const initialState = {
    isLoading: false,
    animes: [],
    error: "",
    name: 'test'
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MISSIONS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_MISSIONS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          animes: action.payload,
          error: ""
        };
      case FETCH_MISSIONS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  