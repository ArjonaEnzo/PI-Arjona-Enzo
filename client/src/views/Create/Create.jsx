import { React, useState } from "react";
import styled from "./create.module.css";
import { validate } from "./validation";
const Create = () => {
  const [state, setState] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    name: "Enter a name for your Activy",
    dificult: "You need to specify a difficulty",
    duration: "You need to specify a duration",
    season: "You need to specify a season",
  });

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

  const disable = () => {
    let disabled = true;
    for (let err in errors) {
      if (errors[err] === "") disabled = false;
      else {
        disabled = true;
        break;//! Si encuentra aunq se un solo error corta el recorrido
      }
    }
    return disabled
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className={styled.contForm} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          className={styled.inputInf}
        />
        <label className={styled.errorInfo}>
          {errors.name && <p>{errors.name}</p>}
        </label>
        {/* {errors.name && <p>{errors.name}</p>} */}

        <label>Dificult</label>
        <input
          name="dificult"
          onChange={handleChange}
          type="text"
          className={styled.inputInf}
        />
        <label className={styled.errorInfo}>{errors.dificult}</label>

        <label>Duration</label>
        <input
          name="duration"
          onChange={handleChange}
          type="text"
          className={styled.inputInf}
        />
        <label className={styled.errorInfo}>{errors.duration}</label>

        <label>Season</label>
        <input
          name="season"
          onChange={handleChange}
          type="text"
          className={styled.inputInf}
        />
        <label className={styled.errorInfo}>{errors.season}</label>

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
