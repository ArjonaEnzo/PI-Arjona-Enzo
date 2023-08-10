// importo las actions-type
import { GET_ALL_COUNTRIES } from "../Actions/actions-type";

const inicialState = {
  allCountries: [],
  allCountriesBC: [],
};

function rootReducer(state = inicialState, action) {
  console.log("algo")
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        allCountriesBC: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
