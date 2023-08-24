import React from "react";
import { Box } from "@mui/material";
import { corGeral } from "../../Styles/cores";
import Divider from "@mui/material/Divider";
import TitleLabel from "./TitleLabel";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  title?: string;
  visible?: boolean;
}

const SectionContainer: React.FC<Props> = ({
  children,
  title,
  visible = true,
}) => {
  const padding = "16px";
  const shouldRenderHeader = !!title;
  return (
    <Box
      height="fit-content"
      borderRadius="8px"
      sx={{
        backgroundColor: corGeral.secundaria,
        display: !visible ? "none" : undefined,
      }}
    >
      {shouldRenderHeader && (
        <>
          <Box padding={padding}>
            <TitleLabel title={title} />
          </Box>
          <Divider />
        </>
      )}
      <Box padding={padding}>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
