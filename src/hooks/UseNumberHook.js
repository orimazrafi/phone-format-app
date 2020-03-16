import React from "react";
let firstPrefix = "+1-";
let secondPrefix = "-";
export const UseNumberHook = () => {
  const [number, setNumber] = React.useState("");
  const handleChange = e => {
    const { value } = e.target;
    if (number.length < 6 && value) setNumber(firstPrefix + value);
    if (number.length > 5 && number.length < 10 && value)
      setNumber(
        firstPrefix + value.slice(0, 3) + secondPrefix + value.slice(3)
      );
    if (number.length > 9 && number.length < 15 && value)
      setNumber(
        firstPrefix +
          value.slice(0, 3) +
          secondPrefix +
          value.slice(3, 6) +
          " (" +
          value.slice(6)
      );

    if (number.length === 15)
      setNumber(
        firstPrefix +
          value.slice(0, 3) +
          secondPrefix +
          value.slice(3, 6) +
          " (" +
          value.slice(6) +
          ")"
      );
  };
  return [number, handleChange];
};
