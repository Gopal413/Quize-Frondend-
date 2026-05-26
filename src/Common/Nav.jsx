import {
  AppBar,
  Box,
  colors,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LinkButton } from "../Components/Styled/PrimaryButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
function Nav({ links, role }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  //const arr =["Home","Login","Register"];
  const roles = role !== "" ? `${role}` : "";
  const renderNavButton = (sx = {}) => {
    return links.map((item, ind) => (
      <LinkButton
        key={ind}
        sx={sx}
        onClick={() => navigate(`/${roles}/${item.toLowerCase()}`)}
      >
        {item}
      </LinkButton>
    ));
  };
  console.log("render :", renderNavButton());

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          Quiez
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          {renderNavButton({
            fontSize: "1.5rem",
          })}
          <LinkButton
            onClick={() => handleLogout()}
            sx={{
              fontSize: "1.5rem",
            }}
          >
            Logout
          </LinkButton>
        </Box>
        <LinkButton
          sx={{
            display: { xs: "block", sm: "none" },

            color: "white",
          }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            open menu
          </MenuIcon>
        </LinkButton>

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <List
            sx={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              //justifyContent:"center"
            }}
          >
            {renderNavButton({
              width: "80%",
              m: 2,
              justifyContent: "center",
            })}
            <LinkButton
            onClick={() => handleLogout()}
            sx={{
              fontSize: "1.5rem",
            }}
          >
            Logout
          </LinkButton>
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  );
}

export default Nav;
