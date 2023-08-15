import React, { useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  filter,
  filterActivities,
  getActivities,
  getAllCountries,
  order,
  page,
} from "../../Redux/Actions/actions";

import style from "./home.module.css";
const Home = () => {
  const dispatch = useDispatch();

  const { allCountries, activities } = useSelector((state) => ({
    allCountries: state.allCountriesBC,
    activities: state.activities,
  }));

  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);

  console.log("acti", activities);

  const handlerFilter = (e) => {
    const { value } = e.target;
    if (e.target.value !== "0") dispatch(filter(value));
  };

  const paginate = (e) => {
    dispatch(page(e.target.name));
  };

  const orderByName = (e) => {
    dispatch(order(e.target.name));
  };

  const handlerClear = (e) => {
    dispatch(clear(e.target.value));
  };

  let values = activities;

  values = values.map((element) => element.name);

  const onlyValues = [...new Set(values)];
  
  const handlerActivity = (event) => {
    dispatch(filterActivities(event.target.value));
  };

  return (
    <div>
      <h1> Chouse your Country </h1>
      <div>
        <div>
          <button name="clear" onClick={handlerClear}>
            Clear Filters
          </button>
        </div>

        <label>Filter/Order</label>
        <button name="az" onClick={orderByName}>
          Order A to Z
        </button>
        <button name="za" onClick={orderByName}>
          Order Z to A
        </button>
        <button name="min-max" onClick={orderByName}>
          Min Population to Max Population
        </button>
        <button name="max-min" onClick={orderByName}>
          Max Population to Min Population
        </button>
      </div>
      <div>
        <label>Paginate</label>
        <button name="prev" onClick={paginate}>
          Prev
        </button>
        <button name="next" onClick={paginate}>
          Next
        </button>
      </div>
      <div>
        <select name="continent" id="continent" onChange={handlerFilter}>
          <option value="0" selected>
            Filter by Continent
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>
      </div>
      <div>
        <select className={style.selects} onChange={handlerActivity}>
          <option className={style.option} value="Select activity">
            Select activity
          </option>
          <option className={style.option} value="All activities">
            All activities
          </option>
          {onlyValues?.map((activity, index) => {
            return (
              <option className={style.option} value={activity} key={index}>
                {activity}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Cards props={allCountries} />
      </div>
    </div>
  );
};

export default Home;
