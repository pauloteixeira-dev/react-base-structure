import React from "react";
import { corGeral } from "../../../../Styles/cores";

interface Props {
  isRequired?: boolean;
}

const RequiredSign: React.FC<Props> = ({ isRequired = false }) => {
  return (
    <span style={{ marginLeft: "2px", color: corGeral.alerta }}>
      {isRequired && "*"}
    </span>
  );
};

export default RequiredSign;
