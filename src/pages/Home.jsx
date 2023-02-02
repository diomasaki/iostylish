import React from "react";
import Airpods from "../components/Airpods";
import IphoneOne from "../components/IphoneOne";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IphoneOne />
      <Airpods />
    </div>
  );
};

export default Home;
