import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import {
  PomoContext,
  StudyContext,
  AudioContext,
  RestContext,
  BreakContext,
  UserContext,
  TimerContext,
} from "../App";
import clockalarm from "../assets/alarms/clockalarm.mp3";
import ffseven from "../assets/alarms/ffseven.mp3";
import digital from "../assets/alarms/digital.mp3";
import soft from "../assets/alarms/soft.mp3";
import axios from "axios";
import "../App.css";

const MANUAL_ALARM = new Audio(clockalarm);
const FANFARE_ALARM = new Audio(ffseven);
const DIGITAL_ALARM = new Audio(digital);
const SOFT_ALARM = new Audio(soft);

function CircularProgressWithLabel(props) {
  return (
    <>
      <Typography
        textAlign={"center"}
        width="100%"
      >
        <Box sx={{ position: "relative", display: "inline-flex", mt: 3 }}>
          <CircularProgress
            size="20rem"
            thickness="3"
            color={props.isRunning === true ? "info" : "error"}
            variant="determinate"
            value={props.value}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              component="div"
              color="primary"
              fontFamily={"Nunito"}
              fontWeight={700}
            >
              {`${props.time}`}
            </Typography>
          </Box>
        </Box>
      </Typography>
      <Grid container>
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
            onClick={props.start}
            disabled={props.isRunning === true}
            color="success"
          >
            <Typography fontSize="4rem">
              <PlayArrowIcon fontSize="inherit" />
            </Typography>
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
            onClick={props.stop}
            color="error"
            disabled={props.isRunning === false}
          >
            <Typography fontSize="4rem">
              <PauseIcon fontSize="inherit" />
            </Typography>
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
            color="warning"
            onClick={props.reset}
          >
            <Typography fontSize="4rem">
              <RestartAltIcon fontSize="inherit" />
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          spacing={3}
        >
          <Grid
            item
            xs={4}
          >
            <Button
              size="large"
              variant="text"
              fullWidth
              onClick={props.focus}
              disabled={props.type === "focus" || props.type === "customStudy"}
            >
              <Typography
                textAlign={"center"}
                fontSize="4rem"
              >
                <PsychologyIcon fontSize="inherit" />
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Button
              size="large"
              variant="text"
              fullWidth
              onClick={props.short}
              disabled={props.type === "short" || props.type === "customBreak"}
            >
              <Typography
                textAlign={"center"}
                fontSize="4rem"
              >
                <LocalCafeIcon fontSize="inherit" />
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Button
              size="large"
              variant="text"
              fullWidth
              onClick={props.long}
              disabled={props.type === "long" || props.type === "customRest"}
            >
              <Typography
                textAlign={"center"}
                fontSize="4rem"
              >
                <SelfImprovementIcon fontSize="inherit" />
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default function CircularStatic() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [type, setType] = useContext(TimerContext);
  const [currentMinutes, setCurrentMinutes] = useState(25 * 60);
  const [intervalId, setIntervalId] = useState(null);
  const [lifePomodoros, setLifePomodoros] = useState(0);
  const [lifeMinutes, setLifeMinutes] = useState(0);
  const [pomoCount, setPomoCount] = useContext(PomoContext);
  const [audio] = useContext(AudioContext);
  const [studyTime] = useContext(StudyContext);
  const [restTime] = useContext(RestContext);
  const [breakTime] = useContext(BreakContext);
  const [user, setUser] = useContext(UserContext);
  const today = new Date().toDateString();

  // Updates user after a Pomodoro completes.
  const updateUser = async (updates) => {
    try {
      const response = await axios.put(
        `https://focudoro-backend.onrender.com/api/users/${user._id}`,
        updates
      );
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      throw error;
    }
  };

  // Updates pomodoro counts for the day in localStorage.
  // Need to add a check if the day is outdated.
  const checkPomoCounts = () => {
    const pomoCounts = JSON.parse(localStorage.getItem("pomoCounts"));
    if (pomoCounts) {
      localStorage.removeItem("pomoCounts");
    }
    localStorage.setItem("pomoCounts", JSON.stringify(pomoCount));
  };

  // Sets totalPomodoros and minutes studied from db to user state
  useEffect(() => {
    if (!user) {
      setUser(null);
    } else {
      setLifePomodoros(user.lifetimePomodoro);
      setLifeMinutes(user.totalMinutes);
    }
  });

  // plays alarm if timeLeft is 0.
  // if type is of focus/customStudy, it makes an API call to
  // update the user db.
  useEffect(() => {
    if (timeLeft === 0) {
      switch (audio) {
        case "soft":
          SOFT_ALARM.play();
          break;
        case "vintage":
          MANUAL_ALARM.play();
          break;
        case "digital":
          DIGITAL_ALARM.play();
          break;
        case "victory":
          FANFARE_ALARM.play();
          break;
      }
      if (type === "focus" || type === "customStudy") {
        setPomoCount(pomoCount + 1);
        checkPomoCounts();
        if (!user.totalDays.includes(today)) {
          updateUser({
            lifetimePomodoro: lifePomodoros + 1,
            totalMinutes: lifeMinutes + currentMinutes,
            totalDays: [...user.totalDays, today],
          });
        } else {
          updateUser({
            lifetimePomodoro: lifePomodoros + 1,
            totalMinutes: lifeMinutes + currentMinutes,
          });
        }
      }
      resetTimer();
      setIsRunning(false);
    }
  }, [timeLeft, type]);

  // Handles custom break time input
  useEffect(() => {
    setTimeLeft(breakTime * 60);
    setType("customBreak");
  }, [breakTime]);

  // Handles custom rest time input
  useEffect(() => {
    setTimeLeft(restTime * 60);
    setType("customRest");
  }, [restTime]);

  // Handles custom study time input
  useEffect(() => {
    setTimeLeft(studyTime * 60);
    setCurrentMinutes(studyTime * 60);
    setType("customStudy");
  }, [studyTime]);

  // Switches timer type
  useEffect(() => {
    switch(type){
      case "focus":
        handleFocus();
        break;
      case "short":
        handleShortBreak();
        break;
      case "long":
        handleLongBreak();
        break;
    }
  }, [type])

  // Handlers for setting the time and type.
  const handleFocus = () => {
    setType("focus");
    setCurrentMinutes(studyTime * 60);
    setTimeLeft(studyTime * 60); // 25 minutes in seconds
  };

  const handleShortBreak = () => {
    setType("short");
    setTimeLeft(breakTime * 60); // 5 minutes in seconds
  };

  const handleLongBreak = () => {
    setType("long");
    setTimeLeft(restTime * 60); // 15 minutes in seconds
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, [timeLeft]);


  // Timer handler; uses interval to decrease total time by a second every second
  const handleStart = () => {
    setIsRunning(true);
    setIntervalId(
      setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === 0) {
            handleStop();
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000)
    );
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Resets time based on current type of timer
  const resetTimer = () => {
    handleStop();
    switch (type) {
      case "short":
        setTimeLeft(breakTime * 60);
        break;
      case "long":
        setTimeLeft(restTime * 60);
        break;
      case "customStudy":
        setTimeLeft(studyTime * 60);
        setCurrentMinutes(studyTime * 60);
        break;
      case "customBreak":
        setTimeLeft(breakTime * 60);
        break;
      case "customRest":
        setTimeLeft(restTime * 60);
        break;
      case "focus":
        setTimeLeft(studyTime * 60);
        setCurrentMinutes(studyTime * 60);
        break;
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Get timer logic, and map 25 minutes, 5 minutes, 15 minutes to 0,100
  const remainingTime = () => {
    let duration = 0;
    switch (type) {
      case "short":
        duration = breakTime * 60;
        break;
      case "long":
        duration = restTime * 60;
        break;
      case "customStudy":
        duration = studyTime * 60;
        break;
      case "customBreak":
        duration = breakTime * 60;
        break;
      case "customRest":
        duration = restTime * 60;
        break;
      case "focus":
        duration = studyTime * 60;
        break;
    }

    if (timeLeft < 0) {
      return 100;
    } else if (timeLeft > duration) {
      return 0;
    }
    return (1 - timeLeft / duration) * 100;
  };

  return (
    <CircularProgressWithLabel
      value={remainingTime()}
      time={seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`}
      start={handleStart}
      focus={handleFocus}
      short={handleShortBreak}
      long={handleLongBreak}
      stop={handleStop}
      reset={resetTimer}
      isRunning={isRunning}
      type={type}
      pomoCount={pomoCount}
    />
  );
}
