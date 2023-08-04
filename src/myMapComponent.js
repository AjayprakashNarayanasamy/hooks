import React from "react";
import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  console.log(window.ajay);
  useEffect(() => {
    let map = new window.google.maps.Map(ref.current, {
      center: { lat: 40.76, lng: -73.983 },
      zoom: 15,
     
    });
  //  new window.google.maps.Marker({
  //   icon: {
  //     url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  //     labelOrigin: new window.google.maps.Point(75, 32),
  //     size:  new window.google.maps.Size(32,32),
  //     anchor:  new window.google.maps.Point(16,32)
  //   },
  //   label: {
  //     text: "5409 Madison St",
  //     color: "#C70E20",
  //     fontWeight: "bold"
  //   },
  //     position: { lat: 40.76, lng: -73.983 },
  //     map: map,
  //     label: "5409 Madison St"
  // });
   
   
  },[]);
   console.log("Test")
  return <div ref={ref} style={{ minHeight: "200vh" }} id="map" />;
}

export default MyMapComponent;
