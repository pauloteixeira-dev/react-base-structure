import React from "react";
import { NumericFormatProps, NumericFormat } from "react-number-format";
import CustomInput, { CustomInputProps } from "../CustomInput";

// limitações do componente:
// Number.MAX_SAFE_INTEGER : 9007199254740991
// Number.MIN_SAFE_INTEGER : -9007199254740991
const CustomInputNumber: React.FC<NumericFormatProps<CustomInputProps>> = (
  props
) => {
  return (
    <NumericFormat
      {...props}
      allowNegative={props.allowNegative || false}
      value={props.value || ""}
      customInput={CustomInput}
      fixedDecimalScale
    />
  );
};

export default CustomInputNumber;
