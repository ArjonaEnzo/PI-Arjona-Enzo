import axios from "axios";
import { GET_ALL_COUNTRIES } from "./actions-type";

export function postActivities(state) {
  return async function (dispatch) {
    try {
      const reponse = await axios.post(
        "http://localhost:3001/activities/",
        state
      );
      console.log("estadoAct",state);
      alert("The activity is created correctly");
    } catch (error) {
      alert(error.response.data.error);

      console.log(error);
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
