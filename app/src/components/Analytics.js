import React, { useState, useEffect, useContext, useCallback } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Lifetime Pomodoros
import MoreTimeIcon from "@mui/icons-material/MoreTime"; // Pomodoros this session
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"; // Minutes Focused
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Total logins
import { UserContext, PomoContext } from "../App";
import { formatTime, getRegisteredDateString } from "../utils/time";
import axios from "axios";
import "../App.css";

export default function Analytics() {
  const [user, setUser] = useContext(UserContext);
  const [pomoCount, setPomoCount] = useContext(PomoContext);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [lifetimePomodoros, setLifetimePomodoros] = useState(0);
  const [totalDays, setTotalDays] = useState([]);

  // Checks local storage to see if the lifetimePomodoros, totalMinutes, and loggedDays are saved
  // Uses retrieved values to initiate state for the analytics component
  useEffect(() => {
    const initialLifePomos = JSON.parse(
      localStorage.getItem("lifetimePomodoros")
    );
    const initialTotalMinutes = JSON.parse(
      localStorage.getItem("totalMinutes")
    );
    const initialTotalDays = JSON.parse(localStorage.getItem("totalDays"));
    setLifetimePomodoros(initialLifePomos || 0);
    setTotalMinutes(initialTotalMinutes || 0);
    setTotalDays(initialTotalDays || []);
  }, []);

  // When user completes a pomodoro, retrieves the latest user data after 20 seconds
  // Expects user data object to update total minutes, lifetimePomodoros, and loggedDays
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedUser = await axios.get(
          `https://focudoro-backend.onrender.com/api/users/${user._id}`
        );
        setUser(updatedUser.data);
        setTotalMinutes(updatedUser.data.totalMinutes);
        localStorage.setItem(
          "totalMinutes",
          JSON.stringify(updatedUser.data.totalMinutes)
        );
        setLifetimePomodoros(updatedUser.data.lifetimePomodoro);
        localStorage.setItem(
          "lifetimePomodoros",
          JSON.stringify(updatedUser.data.lifetimePomodoro)
        );
        setTotalDays(updatedUser.data.totalDays);
        localStorage.setItem(
          "totalDays",
          JSON.stringify(updatedUser.data.totalDays)
        );
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(fetchData, 20 * 1000);
  }, [pomoCount]);

  return (
    <Grid
      container
      sx={{ backgroundColor: "#1976D2", borderRadius: "25px" }}
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
          fontWeight={700}
          fontSize={"3rem"}
          variant="h6"
        >
          {pomoCount}
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
          fontWeight={700}
          variant="h6"
          fontSize={"3rem"}
        >
          {lifetimePomodoros}
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
          fontWeight={700}
          variant="h6"
          fontSize={"3rem"}
        >
          {formatTime(totalMinutes)[0]}
        </Typography>
        <Typography
          color="#fff"
          textAlign={"center"}
          fontFamily="Nunito"
          fontWeight={700}
        >
          {formatTime(totalMinutes)[1]}
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
          fontWeight={700}
          variant="h6"
          fontSize={"3rem"}
        >
          {totalDays.length}
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
          fontStyle="italic"
        >{`Productively vibing since: ${getRegisteredDateString(
          user
        )} `}</Typography>
      </Grid>
    </Grid>
  );
}
