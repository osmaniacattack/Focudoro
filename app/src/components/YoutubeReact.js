import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MainCard from "./MainCard";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import YouTube from "react-youtube";
import { useTheme, styled } from "@mui/material/styles";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

export default function YoutubeReact() {
  const [videoIds] = useState([
    "jfKfPfyJRdk",
    "kgx4WGK0oNU",
    "e3L1PIY1pN8",
    "7NOSDKb0HlU",
    "IUT1qAhMY4w",
    "Ha2UW8a0Vzc",
    "WDXPJWIgX-o"
  ]);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(1);
  const [player, setPlayer] = useState(null);
  const [show, setShow] = useState(false);
  const theme = useTheme();

  const onReady = useCallback(
    (event) => {
      setPlayer(event.target);
      event.target.playVideo();
    },
    [setPlayer]
  );

  const onEnd = useCallback(() => {
    setCurrentVideoIdx((currentVideoIdx + 1) % videoIds.length);
    player.loadVideoById(videoIds[currentVideoIdx]);
  }, [currentVideoIdx, videoIds, player]);

  const opts = {
    width: "1",
    height: "1",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const handleBack = () => {
    currentVideoIdx === 0
      ? setCurrentVideoIdx(6)
      : setCurrentVideoIdx((currentVideoIdx) => currentVideoIdx - 1);
  };

  const handleForward = () => {
    currentVideoIdx === 6
      ? setCurrentVideoIdx(0)
      : setCurrentVideoIdx((currentVideoIdx) => currentVideoIdx + 1);
  };

  const cardDescription = [
    ["lofi hip hop radio - beats to relax/study to", "Lofi Girl"],
    [
      `jazz/lofi hip hop radio🌱chill beats to relax/study to [LIVE 24/7]`,
      "Abao in Tokyo",
    ],
    ["coffee shop radio // 24/7 lofi hip-hop beats", "STEEZYASF*CK"],
    ["lofi hip hop radio - beats to study/relax to 🐾", "Chillhop Music"],
    ["24/7 Korean Underground Indie/R&B/Hip-hop Radio", "Mellowbeat Seeker"],
    [
      "Tokyo cafe ☕ Beautiful relaxing jazz music and bossa nova piano for stress relief",
      "In the Rain",
    ],
    ["anime lofi hip hop radio - 24/7 chill lofi remixes of anime", "nostalgic"]
  ];

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
                    sx={{ color: "#fff" }}
                  >
                    <i>{cardDescription[currentVideoIdx][0]}</i>
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#fff", mt: 0.25 }}
                  >
                    by: {cardDescription[currentVideoIdx][1]}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ m: -2 }}>
          {show === true ? (
            <YouTube
              videoId={videoIds[currentVideoIdx]}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
            />
          ) : null}
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
            sx={{ color: "#fff" }}
          >
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="next"
            onClick={handleForward}
            sx={{ color: "#fff" }}
          >
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
          {show === true ? (
            <IconButton
              aria-label="Mute"
              onClick={() => setShow(false)}
              sx={{ color: "#fff" }}
            >
              <VolumeUpIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Unmute"
              onClick={() => setShow(true)}
              sx={{ color: "#fff" }}
            >
              <VolumeOffIcon />
            </IconButton>
          )}
        </Box>
      </CardWrapper>
    </>
  );
}
