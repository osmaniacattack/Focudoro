import React, {useState, useContext} from "react";
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

export default function Settings() {
  const [alarm, setAlarm] = useContext(AudioContext);
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
      <Divider/>
      <TextField
        fullWidth
        select
        value={alarm}
        onChange={(e) => setAlarm(e.target.value)}
        sx={{mt:3}}
        label="Alarm Sound"
      >
        <MenuItem value="vintage">Vintage Alarm</MenuItem>
        <MenuItem value="digital">Digital Alarm</MenuItem>
        <MenuItem value="victory">Victory Fanfare</MenuItem>
      </TextField>
      <Divider/>
    </Container>
  );
}
