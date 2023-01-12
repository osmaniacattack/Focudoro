import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: "#2D728F"}} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pomotify
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tasks
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
            {/* To be replaced with authentication logic */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
