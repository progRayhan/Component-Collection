import React from "react";
import CarAskingPrice from "../components/CarAskingPrice";
import CarDetails from "../components/carDetails";
import CarFeatures from "../components/CarFeatures";

function component_adder() {
  return (
    <div>
      <CarDetails />
      <CarFeatures />
      <CarAskingPrice />
    </div>
  );
}

export default component_adder;
