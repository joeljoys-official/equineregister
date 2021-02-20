export const checkValidityueln = (uelnvalue, setErrorFound, setSearched) => {
  let ueln = uelnvalue.replaceAll(" ", "");
  if (isNaN(Number(ueln))) {
    setErrorFound(["UELN not valid"]);
    setSearched(false);
    return false;
  } else if (ueln.length !== 15) {
    setSearched(false);
    setErrorFound(["UELN has to be 15 digit"]);
    return false;
  } else {
    return true;
  }
};

export const checkValidityDate = (value, setErrorFound, setSearched) => {
  const { dateFrom, monthFrom, yearFrom, dateTo, monthTo, yearTo } = value;
  const checkFormatValidity = (inputDate, inputMonth, inputYear) => {
    let date = parseInt(inputDate);
    let month = parseInt(inputMonth);
    let year = parseInt(inputYear);
    if (isNaN(date) || isNaN(month) || isNaN(year)) {
      setErrorFound(["Date wrong format"]);
      setSearched(false);
    } else {
      if (date > 31 || date < 1) {
        setErrorFound(["wrong date"]);
        setSearched(false);

        return false;
      } else if (
        (month === 4 || month === 6 || month === 9 || month === 11) &&
        date === 31
      ) {
        setErrorFound(["wrong date"]);
        setSearched(false);

        return false;
      } else if (month === 2) {
        let isleap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        if (date > 29 || (date === 29 && !isleap))
          setErrorFound(["wrong date"]);
        setSearched(false);

        return false;
      }
      if (month > 12 || month < 1) {
        setErrorFound(["wrong month"]);
        setSearched(false);

        return false;
      }
      if (year > 2050 || year < 1900) {
        setErrorFound(["wrong year"]);
        setSearched(false);

        return false;
      } else return true;
    }
  };
  if (
    checkFormatValidity(dateFrom, monthFrom, yearFrom) &&
    checkFormatValidity(dateTo, monthTo, yearTo)
  ) {
    return true;
  }
};
