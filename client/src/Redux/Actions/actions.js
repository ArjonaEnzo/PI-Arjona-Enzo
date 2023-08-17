import axios from "axios";
import {
  CLEAR,
  FILTER,
  FILTER_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_NAME,
  ORDER,
  PAGINATE,
  POST_ACTIVITY,
} from "./actions-type";

export function postActivities(state) {
  return async function (dispatch) {
    try {
      const reponse = await axios.post(
        "http://localhost:3001/activities/",
        state
      );
      const activity = reponse.data;
      alert("The activity is created correctly");
      dispatch({
        type: POST_ACTIVITY,
        payload: activity,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export function getAllCountries() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/countries/");
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function page(direction) {
  return async function (dispatch) {
    try {
      dispatch({
        type: PAGINATE,
        payload: direction,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function order(direction) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ORDER,
        payload: direction,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filter(value) {
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterActivities(activity) {
  return {
    type: FILTER_ACTIVITIES,
    payload: activity,
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/activities/");
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries/name?name=${name}`
      );
      dispatch({
        type: GET_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clear(value) {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
