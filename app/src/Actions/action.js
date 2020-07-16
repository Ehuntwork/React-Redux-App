import axios from 'axios'

export const FETCH_MISSIONS_START = "FETCH_MISSIONS_START";
export const FETCH_MISSIONS_SUCCESS = "FETCH_MISSIONS_SUCCESS";
export const FETCH_MISSIONS_FAILURE = "FETCH_MISSIONS_FAILURE";

export const fetchMissions = () => {
  return dispatch => {
    dispatch({ type: FETCH_MISSIONS_START });
    axios
      .get("https://api.jikan.moe/v3/character/18/pictures")
      .then(res => {
        dispatch({ type: FETCH_MISSIONS_SUCCESS, payload: res.data.pictures});
      })
      .catch(err => {
        dispatch({ type: FETCH_MISSIONS_FAILURE, payload: err.message });
      });
  };
};


