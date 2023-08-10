import React, { useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  console.log("countries2", allCountries);

  console.log("countries3", allCountries[0].name);
  console.log("countries3", allCountries[0].flagImage);
  console.log("countries3", allCountries[0].id);


  useEffect(() => {
    dispatch(getAllCountries());
    
    return () => {};
  }, []);
  
  return (
    <div>
      <h1> Chouse your Country </h1>
      <div>
        <Cards props={allCountries} />
      </div>
    </div>
  );
};

export default Home;
