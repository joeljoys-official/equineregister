import classes from "./Aside.module.css";
import React from "react";
import Logo from "./InnerElements/Logo";
import DateElem from "./InnerElements/DateElem/DateElem";
import {
  checkValidityueln,
  checkValidityDate,
} from "./../Validation/Validation";
import SearchedResults from "./SearchedResults";

const Aside = (props) => {
  const {
    uelnvalue,
    setErrorFound,
    value,
    errorfound,
    setSearched,
    searched,
    datevalue,
  } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      checkValidityueln(uelnvalue, setErrorFound, setSearched) &&
      checkValidityDate(value, setErrorFound, setSearched)
    ) {
      setErrorFound([]);
      setSearched(true);
    }
  };
  let errorMessage = null;
  if (errorfound.length > 0) {
    errorMessage = errorfound.map((el) => {
      return (
        <p className={classes.warning} key={el}>
          {el}
        </p>
      );
    });
  }

  return (
    <div className={classes.Aside}>
      <div className={classes.imageSpec}>
        <Logo />
      </div>
      {!searched ? (
        <form onSubmit={submitHandler}>
          <label htmlFor="ueln" className={classes.uelnLabel}>
            Enter UELN,Passport or Microchip Number
          </label>
          <input
            type="text"
            id="ueln"
            className={classes.ueln}
            maxLength="18"
            value={props.uelnvalue
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim()}
            onChange={props.setUelnValueChange}
            name="ueln"
          />
          <br />
          <label htmlFor="text" className={classes.uelnLabel}>
            Enter search date Range
          </label>
          <p id="text" className={classes.text}>
            Enter the date range to search between
          </p>
          <DateElem value={props.value} changed={props.changed} />
          <input
            type="submit"
            className={classes.button}
            value="Search Now &gt; "
          />
          {errorMessage}
        </form>
      ) : (
        <SearchedResults uelnvalue={uelnvalue} datevalue={datevalue} />
      )}
    </div>
  );
};

export default Aside;
