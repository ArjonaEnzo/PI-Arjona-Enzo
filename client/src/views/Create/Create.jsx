import { React, useEffect, useState } from "react";
import styled from "./create.module.css";
import { getAllCountries, postActivities } from "../../Redux/Actions/actions";
import { getDificulty } from "./getDificilty";

import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  const countries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
    return () => {};
  }, [dispatch]);

  const [state, setState] = useState({
    name: "",
    dificult: 1,
    duration: "",
    season: [],
    countries: [],
  });
  console.log(state.season);

  const [errors, setErrors] = useState({
    season: "This field is required",
    name: "This field is required",
    duration: "This field is required",
    dificult: "This field is required",
    countries: "This field is required",
  });

  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const handleCountries = (event) => {
    const countriesId = event.target.value;
    const country = countries.find((count) => count.id === countriesId);

    if (country) {
      setErrors({
        ...errors,
        countries: "",
      });
    } else {
      setErrors({
        ...errors,
        countries: "Debes seleccionar al menos un país",
      });
    }

    setState({
      ...state,
      countries: [...state.countries, countriesId],
    });

    setSelected([
      ...selected,
      {
        id: countriesId[0],
        name: country.name,
        flag: country.flagImage,
      },
    ]);
  };

  const deletCountries = (id) => {
    if (selected.length === 0) {
      setErrors({ ...errors, countries: "Select at least on country" });
    }
    const filtCon = countries.filter((c) => c !== id);
    setState({ ...state, countries: filtCon });
    setSelected(selected.filter((c) => c.id !== id));
  };

  const disable = () => {
    return (
      !!errors.name ||
      !!errors.dificult ||
      !!errors.duration ||
      !!errors.season ||
      selected.length === 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(state));
  };

  const handleRang = (e) => {
    const { name, value } = e.target;
    const parseValue = parseInt(value);

    if (name === "dificult") {
      if (parseValue >= 1 && parseValue <= 5)
        setErrors({ ...errors, dificult: "" });
      else {
        setErrors({ ...errors, dificult: "Select a difficulty level" });
        return;
      }
    }

    if (name === "duration") {
      if (parseValue >= 1 && parseValue <= 24)
        setErrors({ ...errors, duration: "" });
      else {
        setErrors({ ...errors, duration: "Select a duration" });
      }
    }

    setState({
      ...state,
      [name]: parseValue,
    });
  };

  const filterCountries = countries.filter(
    (count) => !state.countries.includes(count.id)
  );

  const validate = (state, name) => {
    if (name === "name") {
      if (state.name !== "") setErrors({ ...errors, name: "" });
      else {
        setErrors({ ...errors, name: "This field is required" });
        return;
      }

      if (state.name.length < 35) setErrors({ ...errors, name: "" });
      else {
        setErrors({ ...errors, name: "Can't be longer than 35 characters" });
        return;
      }

      if (!/^[A-Za-z\s]+$/i.test(state.name))
        setErrors({
          ...errors,
          name: "The name of the activity can only include letters and spaces.",
        });
      else {
        setErrors({
          ...errors,
          name: "",
        });
        return;
      }
    }

    if (name === "season") {
      if (state.season.length === 0)
        setErrors({
          ...errors,
          season: "This field is required",
        });
      else {
        setErrors({ ...errors, season: "" });
      }
    }
  };

  return (
    <div>
      <form className={styled.contForm} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder="Name of the activity"
          name="name"
          onChange={handleChange}
          type="text"
          className={styled.inputInf}
        />
        <label className={styled.errorInfo}>
          {errors.name && <p>{errors.name}</p>}
        </label>

        <label>Difficult</label>
        <input
          name="dificult"
          onChange={handleRang}
          type="range"
          min="1"
          max="5"
          value={state.dificult}
          className={styled.inputInf}
        />
        <p>{getDificulty(state.dificult)}</p>
        <label className={styled.errorInfo}>
          {errors.dificult && <p>{errors.dificult}</p>}
        </label>

        <label>Duration</label>
        <input
          name="duration"
          onChange={handleRang}
          type="range"
          min="1"
          max="24"
          value={state.duration}
          className={styled.inputInf}
        />
        <p>{state.duration} Hour</p>
        <label className={styled.errorInfo}>
          {" "}
          {errors.duration && <p>{errors.duration}</p>}
        </label>

        <label>Season</label>
        <div>
          <select name="season" onChange={handleChange}>
            <option value="">-Select a season-</option>
            <option value="Verano">Summer</option>
            <option value="Otoño">Autumn</option>
            <option value="Invierno">Winter</option>
            <option value="Primavera">Spring</option>
          </select>
        </div>
        <label className={styled.errorInfo}>
          {errors.season && <p>{errors.season}</p>}
        </label>

        <label>Countries</label>
        <select onChange={handleCountries} name="countries" id="country">
          <option value="0">-Select an option-</option>
          {filterCountries?.map((c) => {
            return (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>
        <label className={styled.errorInfo}>
          {errors.countries && <p>{errors.countries}</p>}
        </label>

        <div>
          <h2>Countries Selected:</h2>
          {selected?.map((c, index) => {
            return (
              <div key={index}>
                <div>
                  <img src={c.flag} alt={`${c.name}icon`} />
                  <p>{c.name}</p>
                </div>
                <button onClick={() => deletCountries(c.id)}>x</button>
              </div>
            );
          })}
        </div>

        <input
          disabled={disable()}
          type="submit"
          className={styled.inputSub}
          value={"Create Activity"}
        />
      </form>
    </div>
  );
};

export default Create;
