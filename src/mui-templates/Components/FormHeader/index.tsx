import { Box, Grid } from "@mui/material";
import TitleDescription from "./TitleDescription";
import TitleLabel from "./TitleLabel";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  title?: string;
  description?: string;
  mb?: string | number | undefined;
}

const FormHeader = ({ children, title, mb = "12px", description }: Props) => {
  const shouldRenderTitle = !!title;
  const shouldRenderdescription = !!description;

  return (
    <Box gap="24px" mb={mb}>
      <Grid container>
        {shouldRenderTitle && (
          <Grid item xs={6}>
            <TitleLabel title={title} />
          </Grid>
        )}
        <Grid item xs={shouldRenderTitle ? 6 : 12}>
          <Box gap="24px" display="flex" justifyContent="flex-end">
            {children}
          </Box>
        </Grid>
      </Grid>
      {shouldRenderdescription && (
        <TitleDescription description={description} />
      )}
    </Box>
  );
};

export default FormHeader;
