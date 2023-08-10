  export const validate = (state, name) => {
    const errors = {};

    if (name === "name") {
      if (state.name.trim() ==="") {
        errors.name = "Enter a name for your Activy";
      }
      if (state.name.length > 35) {
        errors.name = "Can't be longer than 35 characters";
      }
      if (!/^[A-Za-z\s]+$/i.test(state.name)) {
        errors.name =
          "The name of the activity can only include letters and spaces.";
      }
    }

    if (name === "dificult") {
      if (state.dificult.trim() === "") {
        errors.dificult = "You need to specify a difficulty";
      }
    }
    if (name === "duration") {
      if (state.duration.trim() === "") {
        errors.duration = "You need to specify a duration";
      }
    }
    if (name === "season") {
      if (state.season === "") {
        errors.season = "You need to specify a season";
      }
    }
    return errors;
  }
