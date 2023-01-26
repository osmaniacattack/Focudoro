import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { PomoContext, StudyContext, AudioContext } from "../App";
import clockalarm from "../assets/clockalarm.mp3";
import ffseven from "../assets/ffseven.mp3";
import digital from "../assets/digital.mp3";
import "../App.css"

function CircularProgressWithLabel(props) {
  const [toggleInfo, setToggleInfo] = useState(false);
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
            color="info"
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
            {toggleInfo === false ? (
              <Typography
                variant="h1"
                component="div"
                color="primary"
                fontFamily={"Nunito"}
                fontWeight={700}
                onClick={() => setToggleInfo(!toggleInfo)}
              >
                {`${props.time}`}
              </Typography>
            ) : (
              <Typography
                variant="h3"
                component="div"
                color="primary"
                fontFamily={"Nunito"}
                fontWeight={800}
                onClick={() => setToggleInfo(!toggleInfo)}
              >
                {`${props.pomoCount} Pomodoro(s)`}
              </Typography>
            )}
          </Box>
        </Box>
      </Typography>
      <Grid
        container
        sx={{ p: 2 }}
      >
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
            <PlayArrowIcon />
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
            <StopIcon />
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
            <RestartAltIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ p: 2 }}
      >
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
            onClick={props.focus}
            color="info"
            disabled={props.type === "focus"}
          >
            <Typography
              variant="h6"
              fontWeight="700"
              fontFamily={"Nunito"}
              >
              Focus
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
            onClick={props.short}
            color="info"
            disabled={props.type === "short"}
          >
            <Typography
              variant="h6"
              fontWeight="700"
              fontFamily={"Nunito"}
              >
              Short Break
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
            onClick={props.long}
            color="info"
            disabled={props.type === "long"}
          >
            <Typography
              variant="h6"
              fontWeight="700"
              fontFamily={"Nunito"}
              >
              Long Break
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const manualAlarm = new Audio(clockalarm);
  const fanfareAlarm = new Audio(ffseven);
  const digitalAlarm = new Audio(digital);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [type, setType] = useState("focus");
  const [intervalId, setIntervalId] = useState(null);
  const [pomoCount, setPomoCount] = useContext(PomoContext);
  const [audio] = useContext(AudioContext);
  const [studyTime] = useContext(StudyContext);

  const checkPomoCounts = () => {
    const pomoCounts = JSON.parse(localStorage.getItem("pomoCounts"));
    if (pomoCounts) {
      localStorage.removeItem("pomoCounts");
    }
    localStorage.setItem("pomoCounts", JSON.stringify(pomoCount));
  };

  useEffect(() => {
    if (timeLeft === 0 && (type === "focus" || type === "custom")) {
      switch (audio) {
        case "vintage":
          manualAlarm.play();
          break;
        case "digital":
          digitalAlarm.play();
          break;
        case "victory":
          fanfareAlarm.play();
          break;
      }
      setPomoCount(pomoCount + 1);
      checkPomoCounts();
      resetTimer();
      setIsRunning(false);
    }
  }, [timeLeft, type]);

  useEffect(() => {
    setTimeLeft(studyTime * 60);
    setType("custom");
  }, [studyTime]);

  const handleFocus = () => {
    setType("focus");
    setTimeLeft(studyTime * 60); // 25 minutes in seconds
  };

  const handleShortBreak = () => {
    setType("short");
    setTimeLeft(5 * 60); // 5 minutes in seconds
  };

  const handleLongBreak = () => {
    setType("long");
    setTimeLeft(15 * 60); // 15 minutes in seconds
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, [timeLeft]);

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
  const resetTimer = () => {
    handleStop();
    switch (type) {
      case "short":
        setTimeLeft(5 * 60);
        break;
      case "long":
        setTimeLeft(15 * 60);
        break;
      case "custom":
        setTimeLeft(studyTime * 60);
        break;
      default:
        setTimeLeft(25 * 60);
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
        duration = 5 * 60;
        break;
      case "long":
        duration = 15 * 60;
        break;
      case "custom":
        duration = studyTime * 60;
        break;
      default:
        duration = 25 * 60;
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
