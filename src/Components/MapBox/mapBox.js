import classes from "./mapBox.module.css";
import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Image from "../../Assets/Images/marker.png";

const MapBox = (props) => {
  const {
    viewport,
    setViewport,
    locationData,
    selectedMarker,
    setSelectedMarker,
    searched,
    ueln,
    value,
  } = props;

  let dateFrom = new Date(
    parseInt(value.yearFrom),
    parseInt(value.monthFrom) - 1,
    parseInt(value.dateFrom)
  );

  let dateTo = new Date(
    parseInt(value.yearTo),
    parseInt(value.monthTo) - 1,
    parseInt(value.dateTo)
  );

  let location = null;

  location = locationData.map((locate) => {
    let datef = new Date(locate.date_from);
    let datet = new Date(locate.date_to);
    let formatteddata = `${
      locate.ueln
    }${datef.getDate()}${datef.getMonth()}${datef.getFullYear()}`;
    let formattedDateFrom = new Date(
      datef.getFullYear(),
      datef.getMonth(),
      datef.getDate()
    );
    let formattedDateTo = new Date(
      datet.getFullYear(),
      datet.getMonth(),
      datet.getDate()
    );

    if (
      searched &&
      dateFrom.getTime() <= formattedDateFrom.getTime() &&
      dateTo.getTime() >= formattedDateTo.getTime() &&
      Number(ueln.replaceAll(" ", "")) ===
        Number(locate.ueln.replaceAll(" ", ""))
    ) {
      return (
        <Marker
          key={formatteddata}
          latitude={Number(locate.location.lat)}
          longitude={Number(locate.location.long)}
        >
          <img
            src={Image}
            alt="\/"
            className={classes.markerStyle}
            onClick={() => {
              setSelectedMarker(locate);
            }}
            onMouseLeave={() => {
              setSelectedMarker(null);
            }}
          />
        </Marker>
      );
    }
  });
  return (
    <div className={classes.Mapbox}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYXNoYXJ5ayIsImEiOiJjazdoYWIwYTYwNTZvM21wZWI4MHJyb3h2In0.SvKdTMZBoMfAsIyxSmDKFg"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {location}
        {selectedMarker ? (
          <Popup
            latitude={Number(selectedMarker.location.lat)}
            longitude={Number(selectedMarker.location.long)}
          >
            <div className={classes.popup}>
              <h1>{selectedMarker.ueln}</h1>
              <p>Date from : {selectedMarker.date_from}</p>
              <p>Date to : {selectedMarker.date_to}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default MapBox;
