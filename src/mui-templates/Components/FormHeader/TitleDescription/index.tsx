import React from "react";
import Typography from "@mui/material/Typography";
import { corGeral } from "../../../Styles/cores";

interface Props {
  description: string;
}

const TitleDescription: React.FC<Props> = ({ description }) => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontSize: "16px",
        fontWeight: 400,
        color: corGeral.navyBlue,
      }}
    >
      <p title={description}>{description}</p>
    </Typography>
  );
};

export default TitleDescription;
