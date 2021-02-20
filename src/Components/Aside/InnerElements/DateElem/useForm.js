import React, { useState } from "react";

const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  return [
    value,
    (event) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
  ];
};

export default useForm;
