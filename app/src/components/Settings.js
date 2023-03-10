import React, { useState, useContext } from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Switch,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import { AudioContext, StudyContext, RestContext, BreakContext, YoutubeContext, BackgroundContext } from "../App";


export default function Settings() {
  const [alarm, setAlarm] = useContext(AudioContext);
  const [studyTime, setStudyTime] = useContext(StudyContext);
  const [breakTime, setBreakTime] = useContext(BreakContext);
  const [restTime, setRestTime] = useContext(RestContext);
  const [background, setBackground] = useContext(BackgroundContext);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [customURL, setCustomURL] = useContext(YoutubeContext);

  function handleURLChange(e) {
    setValue(e.target.value);
    setError(false);
    let url = e.target.value;
    let videoId = url.split("v=")[1];
    let ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    if (!videoId) {
      setError(true);
    } else {
      setCustomURL(videoId);
    }
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {
      setValue("");
      setCustomURL("");
    }
  };

  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={500}
        color="primary"
        textAlign={"center"}
        fontFamily={"Nunito"}
      >
        App Settings
      </Typography>
      <Typography
        sx={{ m: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
        fontFamily={"Nunito"}
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
        <MenuItem value="soft">Soft Alarm</MenuItem>
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
        fontFamily={"Nunito"}
      >
        Timer Duration in Minutes
      </Typography>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={4}
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
        <Grid
          item
          xs={4}
        >
          <TextField
            fullWidth
            value={breakTime}
            type="number"
            sx={{ mt: 1 }}
            label="Break Timer"
            onChange={(e) => setBreakTime(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <TextField
            fullWidth
            value={restTime}
            type="number"
            sx={{ mt: 1 }}
            label="Rest Timer"
            onChange={(e) => setRestTime(e.target.value)}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{ my: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
        fontFamily={"Nunito"}
      >
        Backgrounds
      </Typography>
      <TextField
        fullWidth
        select
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        sx={{ my: 1 }}
        label="Backgrounds"
      >
        <MenuItem value="blob">Default</MenuItem>
        <MenuItem value="waves">Waves</MenuItem>
        <MenuItem value="lowPoly">Low Poly</MenuItem>
      </TextField>
      <Typography
        sx={{ my: 1 }}
        variant="h6"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
        fontFamily={"Nunito"}
      >
        YouTube Player
      </Typography>
      <Typography
        sx={{ my: 1 }}
        variant="subtitle2"
        fontWeight={400}
        color="gray"
        textAlign={"left"}
        fontFamily={"Nunito"}
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
          label="YouTube URL"
          value={value}
          fullWidth
          onChange={handleURLChange}
        />
      ) : null}
    </Container>
  );
}
