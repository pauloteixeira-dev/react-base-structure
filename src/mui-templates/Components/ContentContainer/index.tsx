import { Box } from "@mui/material";
import { corGeral } from "../../Styles/cores";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

export const ContentContainer = ({ children }: Props) => (
  <Box
    padding="16px"
    height="fit-content"
    m={2}
    borderRadius="8px"
    sx={{ backgroundColor: corGeral.themeLightBox }}
  >
    {children}
  </Box>
);
