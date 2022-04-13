import React from "react";
import CarAskingPrice from "../components/carAskingPrice";
import CarDetails from "../components/carDetails";
import CarFeatures from "../components/CarFeatures";


function component_adder() {
  return (
    <div className="container m-auto">
      <CarDetails/>
      <CarFeatures/>
      <CarAskingPrice/>
    </div>
  );
}

export default component_adder;
