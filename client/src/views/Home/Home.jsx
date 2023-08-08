import React from "react";
import { Cards } from "../../components/Cards/Cards";

const Home = () => {
  const paisExample = [
    {
      name: "Argentina",
      continent: "Sur America",
      flag: "Arg",
    },
    {
      name: "Chile",
      continent: "Sur America",
      flag: "Chl",
    },
    {
      name: "México",
      continent: "Norte America",
      flag: "Mex",
    },
  ];

  return (
    <div>
      <h1> Chouse your Country </h1>
      <div>
        <Cards info={paisExample} />
      </div>
    </div>
  );
};

export default Home;
