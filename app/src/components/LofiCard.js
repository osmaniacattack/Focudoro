import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import MainCard from "./MainCard";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

export default function LofiCard() {
  const theme = useTheme();

  return (
    <CardWrapper
      border={false}
      content={false}
    >
      <Box sx={{ p: 2 }}>
        <List sx={{ py: 0 }}>
          <ListItem
            alignItems="center"
            disableGutters
            sx={{ py: 0 }}
          >
            <ListItemText
              sx={{
                py: 0,
                mt: 0.45,
                mb: 0.45,
              }}
              primary={
                <Typography
                  variant="h6"
                  sx={{ color: "#fff" }}
                >
                  You are listening to: <i>Chillhop Radio Beats to Study To</i>
                </Typography>
              }
              secondary={
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", mt: 0.25 }}
                >
                  by: Chill Raccoon
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
  );
}
