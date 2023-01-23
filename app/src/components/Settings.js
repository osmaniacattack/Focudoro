import React, { useState, useContext } from "react";
import {
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import Question from "../assets/question.png";
import Clock from "../assets/clock.png";
import Research from "../assets/research.png";
import Music from "../assets/music.png";
import { AudioContext } from "../App";
import { StudyContext } from "../App";
import { NoiseContext } from "../App";

export default function Settings() {
  const [alarm, setAlarm] = useContext(AudioContext);
  const [studyTime, setStudyTime] = useContext(StudyContext);
  const [backgroundAudio, setBackgroundAudio] = useContext(NoiseContext)

  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={500}
        color="#2D728F"
        textAlign={"center"}
      >
        Settings
      </Typography>
      <Divider />
      <Typography
        sx={{ m: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
      >
        Alarm Sounds
      </Typography>
      <TextField
        fullWidth
        select
        value={alarm}
        onChange={(e) => setAlarm(e.target.value)}
        sx={{ my: 1 }}
        label="Alarm Sound"
      >
        <MenuItem value="vintage">Vintage Alarm</MenuItem>
        <MenuItem value="digital">Digital Alarm</MenuItem>
        <MenuItem value="victory">Victory Fanfare</MenuItem>
      </TextField>
      <Typography
        sx={{ m: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
      >
        Background Noise
      </Typography>
      <TextField
        fullWidth
        select
        value={backgroundAudio}
        onChange={(e) => setBackgroundAudio(e.target.value)}
        sx={{ my: 1 }}
        label="Background Noise"
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="fire">Fireplace</MenuItem>
        {/* <MenuItem value="rain">Raindrops</MenuItem> */}
        <MenuItem value="cafe">Cafe Chatter</MenuItem>
        {/* <MenuItem value="waves">Ocean Waves</MenuItem> */}
      </TextField>
      <Typography
        sx={{ my: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
      >
        Timer Duration in Minutes
      </Typography>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={12}
        >
          <TextField
            fullWidth
            value={studyTime}
            type="number"
            sx={{ mt: 1 }}
            label="Study Timer"
            onChange={(e) => setStudyTime(e.target.value)}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
