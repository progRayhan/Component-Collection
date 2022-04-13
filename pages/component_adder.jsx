import React from "react";
import CarDetails from "../components/carDetails";
import CarFeatures from "../components/CarFeatures";
import CarAskingPrice from "../components/carAskingPice";

function component_adder() {
  return (
    <div>
      <CarDetails />
      <CarFeatures />
    <CarAskingPrice/>
    </div>
  );
}

export default component_adder;
