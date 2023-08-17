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
} from "../../Redux/Actions/actions";

import style from "./home.module.css";
import PageNumbers from "../../components/Paginate/pageNumbers";
import Paginate from "../../components/Paginate/Paginate";

const Home = () => {
  const dispatch = useDispatch();

  const { allCountries, activities } = useSelector((state) => ({
    allCountries: state.allCountriesBC,
    activities: state.activities,
  }));

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const [countriesPage] = useState(10);

  const indexLastCountry = currentPage * countriesPage;

  const indexFirstCountry = indexLastCountry - countriesPage;

  const currentCountries = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );
  const cantCountries = allCountries.length;

  const arrayPages = PageNumbers(countriesPage, cantCountries);

  const cantPages = arrayPages.length;

  if (currentPage > cantPages) {
    setCurrentPage(1);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlerFilter = (e) => {
    const { value } = e.target;
    if (e.target.value !== "0") dispatch(filter(value));
  };

  const orderByName = (e) => {
    dispatch(order(e.target.value));
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
    <div className={style.homeContainer}>
      <div className={style.selectConteiner}>
        <div>
          <button name="clear" onClick={handlerClear}>
            Clear Filters
          </button>
        </div>

        <select name="order" id="order" onChange={orderByName}>
          <option value="" selected disabled>
            Order By
          </option>
          <option value="az">Order A to Z</option>
          <option value="za">Order Z to A</option>
          <option value="min-max">Min Population to Max Population</option>
          <option value="max-min">Max Population to Min Population</option>
        </select>

        <div>
          <select name="continent" id="continent" onChange={handlerFilter}>
            <option value="0" selected="true" disabled="disable">
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
          <select
            name="act"
            id="order"
            className={style.selects}
            onChange={handlerActivity}
          >
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
      </div>
      <div className={style.pa}>
        <Paginate
          countriesPage={countriesPage}
          allCountries={allCountries.length}
          paginate={paginate}
          currentpage={currentPage}
        />
      </div>
      <div>
        <Cards props={currentCountries} />
      </div>
    </div>
  );
};

export default Home;
