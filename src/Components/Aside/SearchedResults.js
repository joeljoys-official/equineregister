import React from "react";

const SearchedResults = (props) => {
  const { uelnvalue, datevalue } = props;

  return (
    <>
      <p>Movement location for UELN</p>
      <h4>{uelnvalue}</h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <p>From Date</p>
          <h4>
            {datevalue.dateFrom}/{datevalue.monthFrom}/{datevalue.yearFrom}
          </h4>
        </div>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <p>To Date</p>
          <h4>
            {datevalue.dateTo}/{datevalue.monthTo}/{datevalue.yearTo}
          </h4>
        </div>
      </div>
    </>
  );
};

export default SearchedResults;
