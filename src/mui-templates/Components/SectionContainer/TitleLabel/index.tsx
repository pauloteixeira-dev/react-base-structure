import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  title: string;
}

const TitleLabel: React.FC<Props> = ({ title }) => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        <p title={title}>{title}</p>
      </Typography>
    </Box>
  );
};

export default TitleLabel;
