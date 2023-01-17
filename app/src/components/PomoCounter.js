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
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary.light} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary.light} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

export default function PomoCounter() {
  const theme = useTheme();

  return (
    <CardWrapper
      border={false}
      content={false}
    >
      <Box sx={{ p: 5.5 }}>
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
              primary={<Typography variant="h4">3</Typography>}
              secondary={
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.palette.grey[500],
                    mt: 0.5,
                  }}
                >
                  Total Pomodoros
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
  );
}
