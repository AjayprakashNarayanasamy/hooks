import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./myMapComponent";
const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return "Spinning";
    case Status.FAILURE:
      return "Error";
    case Status.SUCCESS:
      return <MyMapComponent />;
      default:
        return "Success"
  }
};

function Map() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <>
      <Wrapper apiKey={"AIzaSyB0HmGxtWX-PA8mrMPMjiowM87SUpDHrTE"}>
        <MyMapComponent
          center={center}
          zoom={zoom}
          render={render}
        ></MyMapComponent>
      </Wrapper>
    </>
  );
}
export default Map;
