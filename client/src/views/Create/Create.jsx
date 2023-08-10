import { React, useEffect, useState } from "react";
import styled from "./create.module.css";
import { validate } from "./validation";
import { getAllCountries, postActivities } from "../../Redux/Actions/actions";

import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  const countries = useSelector((state) => state.allCountries);
  console.log(countries);
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
  console.log(state.season)
  const [errors, setErrors] = useState({});

  const [selected, setSelected] = useState([]);
  console.log("selec", selected);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate(
        {
          ...state,
          [event.target.name]: event.target.value,
        },
        event.target.name
      )
    );
  };

  const handleCountries = (event) => {
    setState({
      ...state,
      countries: [...state.countries, event.target.value],
    });

    const country = countries.find((count) => count.id === event.target.value);

    setSelected([
      ...selected,
      {
        id: event.target.value,
        name: country.name,
        flag: country.flagImage,
      },
    ]);
  };

  const deletCountries = (id) => {
    const filtCon = countries.filter((c) => c !== id);
    setState({ ...state, countries: filtCon });
    setSelected(selected.filter((c) => c.id !== id));
  };

  let disabled = true;
  const disable = () => {
    if (errors === "") disabled = true;
    else {
      disabled = false;
    }
    return disabled;
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    dispatch(postActivities(state));
  };

  const handleBox = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        season: [...state.season, e.target.value],
      });
    } else {
      setState({
        ...state,
        season: state.season.filter((sea) => sea !== e.target.value),
      });
    }
  };

  const handleRang = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: parseInt(value),
    });
    setErrors(
      validate(
        {
          ...state,
          [name]: value,
        },
        name
      )
    );
  };

  const getDificulty = (value) => {
    switch (value) {
      case 1:
        return "Peaceful";
      case 2:
        return "Easy";
      case 3:
        return "Normal";
      case 4:
        return "Hard";
      case 5:
        return "Professional";
      default:
        return "";
    }
  };

  const filterCountries = countries.filter(
    (count) => !state.countries.includes(count.id)
  );

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
        <label className={styled.errorInfo}>{errors.dificult}</label>

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
        <p>{state.duration} Horas</p>
        <label className={styled.errorInfo}>{errors.duration}</label>

        <label>Season</label>
        <div>
          <label>
            <input type="checkbox" onChange={handleBox} value="Verano" />
            Summer
          </label>
          <label>
            <input type="checkbox" onChange={handleBox} value="Otoño" />
            Autumn
          </label>
          <label>
            <input type="checkbox" onChange={handleBox} value="Invierno" />
            Winter
          </label>
          <label>
            <input type="checkbox" onChange={handleBox} value="Primavera" />
            Spring
          </label>
        </div>
        <label className={styled.errorInfo}>{errors.season}</label>

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

        <div>
          <h2>Countries Selected:</h2>
          {selected?.map((c) => {
            return (
              <div>
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
