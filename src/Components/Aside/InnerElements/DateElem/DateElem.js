import classes from "./DateElem.module.css";
import React from "react";

const DateElem = (props) => {
  const { value, changed } = props;
  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <h4>From date</h4>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>
            <label htmlFor="dateFrom" className={classes.label}>
              Day
            </label>
            <input
              type="text"
              name="dateFrom"
              maxLength="2"
              value={value.dateFrom}
              onChange={changed}
              id="dateFrom"
              className={classes.day}
            />
          </div>
          <div className={classes.gridItem}>
            <label htmlFor="monthFrom" className={classes.label}>
              Month
            </label>
            <input
              type="text"
              name="monthFrom"
              maxLength="2"
              value={value.monthFrom}
              onChange={changed}
              id="monthFrom"
              className={classes.day}
            />
          </div>
          <div className={classes.gridItem}>
            <label htmlFor="yearFrom" className={classes.label}>
              Year
            </label>
            <input
              type="text"
              name="yearFrom"
              maxLength="4"
              value={value.yearFrom}
              onChange={changed}
              id="yearFrom"
              className={classes.year}
            />
          </div>
        </div>
      </div>

      <div className={classes.inner}>
        <h4>To date</h4>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>
            <label htmlFor="dateTo" className={classes.label}>
              Day
            </label>
            <input
              type="text"
              name="dateTo"
              maxLength="2"
              value={value.dateTo}
              onChange={changed}
              id="dateTo"
              className={classes.day}
            />
          </div>
          <div className={classes.gridItem}>
            <label htmlFor="monthTo" className={classes.label}>
              Month
            </label>
            <input
              type="text"
              name="monthTo"
              maxLength="2"
              value={value.monthTo}
              onChange={changed}
              id="monthTo"
              className={classes.day}
            />
          </div>
          <div className={classes.gridItem}>
            <label htmlFor="yearTo" className={classes.label}>
              Year
            </label>
            <input
              type="text"
              name="yearTo"
              maxLength="4"
              value={value.yearTo}
              onChange={changed}
              id="yearTo"
              className={classes.year}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateElem;
