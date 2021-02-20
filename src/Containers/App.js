import React, { useState } from "react";
import dataDef from "../data.json";
import MapBox from "../Components/MapBox/mapBox";
import Aside from "../Components/Aside/Aside";
import classes from "./App.module.css";
import useForm from "../Components/Aside/InnerElements/DateElem/useForm";

const App = () => {
  const [data, setdata] = useState(dataDef.equines);
  const [errorFound, setErrorFound] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 54.362792,
    longitude: -2.279921,
    zoom: 5,
    width: "100%",
    height: "100%",
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searched, setSearched] = useState(false);
  const [datevalue, setDateValueChange] = useForm({
    dateFrom: "",
    monthFrom: "",
    yearFrom: "",
    dateTo: "",
    monthTo: "",
    yearTo: "",
  });
  const [uelnvalue, setUelnValueChange] = useForm({
    ueln: "",
  });
  console.log(uelnvalue);
  return (
    <div className={classes.App}>
      <Aside
        value={datevalue}
        changed={setDateValueChange}
        uelnvalue={uelnvalue.ueln}
        setUelnValueChange={setUelnValueChange}
        searched={searched}
        setSearched={setSearched}
        errorfound={errorFound}
        setErrorFound={setErrorFound}
        datevalue={datevalue}
      />
      <MapBox
        value={datevalue}
        viewport={viewport}
        setViewport={setViewport}
        locationData={data}
        searched={searched}
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
        ueln={uelnvalue.ueln}
      />
    </div>
  );
};

export default App;
