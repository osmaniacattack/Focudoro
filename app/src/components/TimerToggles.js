import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { TimerContext } from "../App";
import "../App.css";

export default function TimerToggles() {
  const [type, setType] = useContext(TimerContext);

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Button
          size="large"
          variant="text"
          fullWidth
          onClick={() => setType("focus")}
          disabled={type === "focus"}
        >
          <Typography fontSize="4rem">
            <PsychologyIcon fontSize="inherit" />
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Button
          size="large"
          variant="text"
          fullWidth
          onClick={() => setType("short")}
          disabled={type === "short"}
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
        xs={12}
      >
        <Button
          size="large"
          variant="text"
          fullWidth
          onClick={() => setType("long")}
          disabled={type === "long"}
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
  );
}
