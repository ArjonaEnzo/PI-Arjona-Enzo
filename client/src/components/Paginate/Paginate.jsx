import React from "react";
import style from "./Paginate.module.css";
import PageNumbers from "./pageNumbers";

const Paginate = ({ countriesPage, allCountries, paginate, currentpage }) => {
  const arrayPage = PageNumbers(countriesPage, allCountries);

  return (
    <div className={style.contein}>
      <div className={style.contein2 }>
        <ul className={style.paginate}>
          {arrayPage &&
            arrayPage.map((number, index) => (
              <div key={index} style={{ paddingTop: "1rem" }}>
                {currentpage === number ? (
                  <button
                    className={style.botoncitoSelected}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                ) : (
                  <button
                    className={style.botoncito}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                )}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Paginate;
