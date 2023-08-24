import React from "react";
import CustomInput, { CustomInputProps } from "../CustomInput";

const CustomTextArea: React.FC<CustomInputProps> = (props) => {
  return <CustomInput rows={4} {...props} multiline />;
};

export default CustomTextArea;
