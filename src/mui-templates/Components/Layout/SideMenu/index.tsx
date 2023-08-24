import React, { useState } from "react";
import { Drawer, List, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { corGeral } from "../../../Styles/cores";
import LogoTelegen from "../../../Assets/Img/Telegen/logo-telegen.png";
import ListItemButton from "./ListItemButton";
import CustomCollapse from "./CustomCollapse";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Constants/routes";

interface ISideMenuProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

const SideMenu: React.FC<ISideMenuProps> = ({ isOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleSectionToggle = (sectionId: string) => {
    setOpenSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  return (
    <Drawer
      open={isOpen}
      onClose={handleDrawerToggle}
      sx={{
        zIndex: 2200,
      }}
    >
      <Box
        height="100%"
        minWidth="20vw"
        sx={{
          backgroundColor: corGeral.navyBlue,
          color: "white",
        }}
      >
        <Box display="flex" justifyContent="center" m="20px 0">
          <img src={LogoTelegen} alt="Logo Telegen" width="200px" />
        </Box>
        <List sx={{ margin: "0 12px" }}>
          <Stack gap={1}>
            <ListItemButton
              label="Home"
              onClick={() => navigate(routes.BASE)}
            />
            <ListItemButton
              label="Avaliações"
              onClick={() => navigate(routes.OS_AVALIACAO_LIST)}
            />
            <ListItemButton
              label="Notificações"
              onClick={() => navigate(routes.NOTIFICACAO_LIST)}
            />
            <CustomCollapse
              label="Ordens de serviço"
              onClick={() => handleSectionToggle("ordens-de-servico")}
              isOpen={openSection === "ordens-de-servico"}
            >
              <ListItemButton
                label="Criar OS"
                onClick={() => navigate(routes.OS_CREATE)}
              />
              <ListItemButton
                label="Listar OS"
                onClick={() => navigate(routes.OS_LIST)}
              />
              <ListItemButton
                label="Calendário"
                onClick={() => navigate(routes.OS_CALENDAR)}
              />
            </CustomCollapse>
          </Stack>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
