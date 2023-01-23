import React, { useState, useContext } from "react";
import {
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Switch,
  MenuItem,
  Divider,
  FormControlLabel,
} from "@mui/material";
import Question from "../assets/question.png";
import Clock from "../assets/clock.png";
import Research from "../assets/research.png";
import Music from "../assets/music.png";
import { AudioContext } from "../App";
import { StudyContext } from "../App";

export default function Settings({onChange}) {
  const [alarm, setAlarm] = useContext(AudioContext);
  const [studyTime, setStudyTime] = useContext(StudyContext);
  const [checked, setChecked] = React.useState(true);
  const [customURL, setCustomURL] = React.useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleURLChange = (e) => {
    const value = e.target.value;
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(value)) {
      setError(true);
      setHelperText("Please enter a valid YouTube URL");
    } else {
      setError(false);
      setHelperText("");
      setCustomURL(value);
      onChange(value);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {
      setCustomURL("");
    }
  };

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
      <Typography
        sx={{ my: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
      >
        YouTube Player
      </Typography>
      <Typography
        sx={{ my: 1 }}
        variant="subtitle2"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
      >
        Toggle between preset live music stations or enter in your preferred
        YouTube video of choice to listen to on loop.
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            color="primary"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Toggle Radio / Custom Music"
      />
      {checked === true ? (
        <TextField
          variant="outlined"
          error={error}
          helperText={helperText}
          fullWidth
          onChange={(e) => handleURLChange(e)}
        />
      ) : null}
    </Container>
  );
}
