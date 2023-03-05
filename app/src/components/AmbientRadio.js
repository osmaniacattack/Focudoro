import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from "react";
import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Slider,
} from "@mui/material";
import MainCard from "./MainCard";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useTheme, styled } from "@mui/material/styles";
import Fire from "../assets/ambience/ambient-fire.mp3";
import Rain from "../assets/ambience/ambient-rain.mp3";
import Waves from "../assets/ambience/ambient-waves.mp3";
import { Howl, Howler } from "howler";

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

const CARD_DESCRIPTIONS = [["Ocean Waves"], ["Cozy Fireplace"], ["Rain Drops"]];


export default function AmbientRadio() {
  const theme = useTheme();
  const [soundIds] = useState([Waves, Fire, Rain]);
  const [currentSoundIdx, setCurrentSoundIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [volume, setVolume] = useState(0.5);

  // Sets the sound state if the current sound ID for ambient radio changes.
  useEffect(() => {
    setSound(new Howl({ src: [soundIds[currentSoundIdx]], loop: true }));
  }, [currentSoundIdx]);

  // Sets the volume if the volume input changes.
  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume]);

  // Plays sound and sets the truthy value to true.
  const handlePlay = () => {
    sound.play();
    setPlaying(true);
  };

  // Pauses sound and sets the truthy value to false.
  const handlePause = () => {
    sound.pause();
    setPlaying(false);
  };

  // Allows the user to cycle to the end of the radio array
  // if they clicked back while the pointer is at the beginning of the array.
  const handleBack = () => {
    if (currentSoundIdx === 0) {
      setCurrentSoundIdx(soundIds.length - 1);
    } else {
      setCurrentSoundIdx((currentSoundIdx) => currentSoundIdx - 1);
    }
  };

  // Allows the user to cycle to the beginning of the radio array
  // if they clicked forward while the pointer is at the end of the array.
  const handleForward = () => {
    if (currentSoundIdx === soundIds.length - 1) {
      setCurrentSoundIdx(0);
    } else {
      setCurrentSoundIdx((currentSoundIdx) => currentSoundIdx + 1);
    }
  };

  // Event handler to change the state of volume. Once the state is changed,
  // the useEffect sets the sound object with a new volume value.
  const handleVolumeChange = (event, newValue) => {
    setVolume(event.target.value);
    sound.volume(event.target.value);
  };

  return (
    <>
      <CardWrapper
        border={false}
        content={true}
      >
        <Box sx={{ p: 2 }}>
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
                primary={
                  <Typography
                    variant="h6"
                    color="primary"
                    fontFamily={"Nunito"}
                    fontWeight={800}
                  >
                    <i>
                      {playing === true ? `Playing: ` : `Paused: `}
                      {CARD_DESCRIPTIONS[currentSoundIdx]}
                    </i>
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <IconButton
            aria-label="previous"
            onClick={handleBack}
            color="primary"
            disabled={playing === true}
          >
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="play"
            onClick={handlePlay}
            color="primary"
            disabled={playing === true}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            aria-label="play"
            onClick={handlePause}
            color="primary"
            disabled={playing === false}
          >
            <PauseIcon />
          </IconButton>
          <IconButton
            aria-label="next"
            onClick={handleForward}
            color="primary"
            disabled={playing === true}
          >
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
          <Slider
            disabled={playing === false}
            value={volume}
            onChange={(event) => handleVolumeChange(event)}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="volume-slider"
            sx={{ width: "25%", ml: 3 }}
            color="primary"
          />
        </Box>
      </CardWrapper>
    </>
  );
}
