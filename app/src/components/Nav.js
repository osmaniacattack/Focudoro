import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AboutDialog from "./AboutDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import SettingsDialog from "./SettingsDialog";
import FeedbackDialog from "./FeedbackDialog";
import UpdatesDialog from "./UpdatesDialog";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../App";

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user, setUser] = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pomoCounts");
    setUser({});
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            fontFamily={"Nunito"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 1000,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOCUDORO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <AboutDialog />
                  </Typography>
                </MenuItem>
              ) : null}
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <FeedbackDialog />
                  </Typography>
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <PrivacyPolicyDialog />
                </Typography>
              </MenuItem>
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <UpdatesDialog />
                  </Typography>
                </MenuItem>
              ) : null}
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <SettingsDialog />
                  </Typography>
                </MenuItem>
              ) : null}
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleSignOut}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            fontFamily={"Nunito"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 1000,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOCUDORO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(user).length > 0 ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <AboutDialog />
              </Button>
            ) : null}
            {Object.keys(user).length > 0 ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FeedbackDialog />
              </Button>
            ) : null}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <PrivacyPolicyDialog />
            </Button>
            {Object.keys(user).length > 0 ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <UpdatesDialog />
              </Button>
            ) : null}
            {Object.keys(user).length > 0 ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <SettingsDialog />
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {Object.keys(user).length > 0 ? (
              <Button
                sx={{ color: "#fff", height: "10" }}
                onClick={handleSignOut}
              >
                <LogoutIcon />
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
