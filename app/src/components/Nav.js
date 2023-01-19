import React, { useState, useContext } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserContext } from "../App";

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <AboutDialog />
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Feedback</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <PrivacyPolicyDialog />
                </Typography>
              </MenuItem>
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Settings</Typography>
                </MenuItem>
              ) : null}
              {Object.keys(user).length > 0 ? (
                <MenuItem onClick={() => setUser({})}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
              ) : null}
              {Object.keys(user).length === 0 ? (
                <MenuItem onClick={() => setUser({})}>
                  <GoogleOAuthProvider clientId="497316340818-l1clnun305pgv50b7h5tmr52q3apkp76.apps.googleusercontent.com">
                    <GoogleLogin
                      shape="pill"
                      onSuccess={async (credentialResponse) => {
                        try {
                          let userObject = jwt_decode(
                            credentialResponse.credential
                          );
                          setUser(userObject);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </GoogleOAuthProvider>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOCUDORO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <AboutDialog />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Feedback
            </Button>
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
                Settings
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {Object.keys(user).length === 0 ? (
              <GoogleOAuthProvider clientId="497316340818-l1clnun305pgv50b7h5tmr52q3apkp76.apps.googleusercontent.com">
                <GoogleLogin
                  shape="pill"
                  onSuccess={async (credentialResponse) => {
                    try {
                      let userObject = jwt_decode(
                        credentialResponse.credential
                      );
                      setUser(userObject);
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            ) : (
              <Button
                sx={{ color: "#fff", height: "10" }}
                onClick={() => setUser({})}
              >
                <LogoutIcon />
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
