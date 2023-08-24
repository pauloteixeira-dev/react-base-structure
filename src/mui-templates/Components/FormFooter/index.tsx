import { Box } from "@mui/material";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const FormFooter = ({ children }: Props) => (
  <Box gap="24px" display="flex" justifyContent="flex-end">
    {children}
  </Box>
);

export default FormFooter;
