export const getDificulty = (value) => {
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