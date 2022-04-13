import React from "react";
import CarDetails from "../components/CarDetails";
import CarFeatures from "../components/CarFeatures"
// import CarAskingPrice from "../components/CarAskingPrice";

function component_adder() {
  return (
    <div className="container">
      <CarDetails/>
      <CarFeatures/>
      {/* <CarAskingPrice/> */}
    </div>
  );
}

export default component_adder;
