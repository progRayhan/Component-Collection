import React from "react";
import CarAskingPrice from "../components/carAskingPice";
import CarDetails from "../components/carDetails";
import CarFeatures from "../components/carAskingPrice";

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
