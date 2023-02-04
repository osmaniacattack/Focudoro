import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  IconButton,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Lifetime Pomodoros
import MoreTimeIcon from "@mui/icons-material/MoreTime"; // Pomodoros this session
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"; // Minutes Focused
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Total logins
import { UserContext } from "../App";
import "../App.css";

export default function Analytics() {
  const [user, setUser] = useContext(UserContext);
  const getRegisteredDateString = () => {
    console.log(user);
    const options = { year: "numeric", month: "long", day: "numeric" };
    let userRegistered = new Date(user.registered);
    return userRegistered.toLocaleDateString("en-US", options);
  };

  return (
    <Grid
      container
      sx={{ backgroundColor: "#1976D2", borderRadius:"25px" }}
    >
      <Grid
        item
        xs={6}
        p={2}
      >
        <Typography
          color="#fff"
          textAlign={"center"}
        >
          <MoreTimeIcon />
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={1000}
          variant="h6"
        >
          0
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >
          Pomodoros Today
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        p={2}
      >
        <Typography
          color="#fff"
          textAlign={"center"}
        >
          <AccessTimeIcon />
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={1000}
          variant="h6"
        >
          0
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >
          Total Pomodoros
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        p={2}
      >
        <Typography
          color="#fff"
          textAlign={"center"}
        >
          <HourglassBottomIcon />
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={1000}
          variant="h6"
        >
          0
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >
          Total Minutes Focused
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        p={2}
      >
        <Typography
          color="#fff"
          textAlign={"center"}
        >
          <CalendarMonthIcon />
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={1000}
          variant="h6"
        >
          0
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >
          Total Days Logged
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        p={2}
      >
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >{`Productively vibing since: ${getRegisteredDateString()} `}</Typography>
      </Grid>
    </Grid>
  );
}
