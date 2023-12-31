/* eslint-disable array-callback-return */
// importo las actions-type
import {
  CLEAR,
  FILTER,
  FILTER_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_NAME,
  ORDER,
  POST_ACTIVITY,
} from "../Actions/actions-type";

const inicialState = {
  allCountries: [],
  allCountriesBC: [],
  allCountriesBC2: [],
  activities: [],
  currentPage: 0,
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        allCountriesBC: [...action.payload],
        allCountriesBC2: action.payload,
      };

    case ORDER:
      if (action.payload === "az") {
        const allCountriesOrder = [...state.allCountriesBC].sort(
          (prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }
        );
        return {
          ...state,
          allCountriesBC: [...allCountriesOrder],
        };
      }

      if (action.payload === "za") {
        const allCountriesOrder = [...state.allCountriesBC].sort(
          (prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }
        );
        return {
          ...state,
          allCountriesBC: [...allCountriesOrder],
        };
      }

      if (action.payload === "min-max") {
        const allCountriesOrder = [...state.allCountriesBC].sort(
          (a, b) => a.population - b.population
        );
        return {
          ...state,
          allCountriesBC: [...allCountriesOrder],
        };
      }

      if (action.payload === "max-min") {
        const allCountriesOrder = [...state.allCountriesBC].sort(
          (a, b) => b.population - a.population
        );
        return {
          ...state,
          allCountriesBC: [...allCountriesOrder],
        };
      }
      return state;

    case FILTER:
      let filtrados = [...state.allCountriesBC2];

      filtrados = filtrados.filter((c) => {
        return c.continent === action.payload;
      });

      return {
        ...state,
        allCountriesBC: [...filtrados],
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_NAME:
      return {
        ...state,
        allCountriesBC: action.payload,
        allCountriesBC2: action.payload,
        currentPage: 0,
      };

    case FILTER_ACTIVITIES:
      const countries = state.allCountriesBC2;
      const allActivities = state.activities;
      const activity = action.payload;
      const actMatch = [];
      let countriesFinal = [];

      if (activity === "Select activity") {
        countriesFinal = countries;
      } else {
        if (activity === "All activities") {
          allActivities.map((element) => {
            return actMatch.push(element.Countries);
          });
        } else {
          allActivities.map((element) => {
            if (element.name === activity) {
              actMatch.push(element.Countries);
            }
          });
        }
        const actMatchInside = [];

        for (let i = 0; i < actMatch.length; i++) {
          actMatch[i].map((element) => {
            return actMatchInside.push(element.name);
          });
        }

        const countriesNames = [...new Set(actMatchInside)];

        for (let name of countriesNames) {
          countriesFinal.push(
            countries.find((element) => element.name === name)
          );
        }
      }
      return {
        ...state,
        allCountriesBC: countriesFinal,
      };

    case CLEAR:
      const selects = document.getElementsByTagName("select");
      for (let i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
      }
      return {
        ...state,
        allCountriesBC: state.allCountriesBC2,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
