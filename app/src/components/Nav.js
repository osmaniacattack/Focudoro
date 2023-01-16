import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import AboutDialog from "./AboutDialog";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color="info">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Focudoro
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
          >
            <AboutDialog />
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
          >
            Tasks
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
          >
            Settings
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="spotify"
            sx={{ mr: 2 }}
          >
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
