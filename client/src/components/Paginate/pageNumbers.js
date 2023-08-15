const PageNumbers = (countriesPage, allCountries) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(allCountries / countriesPage); i++) {
    if (i === Math.ceil(allCountries / countriesPage) - 1) {
      pageNumbers.push(i + 1);
      break;
    } else {
      pageNumbers.push(i + 1);
    }
  }
  return pageNumbers;
};

export default PageNumbers;
