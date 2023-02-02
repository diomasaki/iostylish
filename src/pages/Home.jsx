import React from "react";
import Airpods from "../components/Airpods";
import Camera from "../components/Camera";
import Iphone14 from "../components/Iphone14";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Iphone14 />
      <Airpods />
    </div>
  );
};

export default Home;
