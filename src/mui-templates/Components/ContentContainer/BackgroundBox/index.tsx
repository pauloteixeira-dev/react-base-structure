import { Box } from "@mui/material";
import { corGeral } from "../../../Styles/cores";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  padding?: string;
}

export const BackgroundBox = ({ children, padding = "16px" }: Props) => (
  <Box
    padding={padding}
    height="fit-content"
    sx={{ backgroundColor: corGeral.themeLightBox }}
  >
    {children}
  </Box>
);
