import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  Box,
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
import BackspaceIcon from "@mui/icons-material/Backspace";
import YouTube from "react-youtube";
import { useTheme, styled } from "@mui/material/styles";
import { YoutubeContext } from "../App";
import axios from "axios";

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
  const theme = useTheme();
  const [videoIds] = useState([
    "jfKfPfyJRdk",
    "kgx4WGK0oNU",
    "e3L1PIY1pN8",
    "7NOSDKb0HlU",
    "IUT1qAhMY4w",
    "Ha2UW8a0Vzc",
  ]);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(1);
  const [player, setPlayer] = useState(null);
  const [show, setShow] = useState(false);
  const [customURL, setCustomURL] = useContext(YoutubeContext);
  const [videoInfo, setVideoInfo] = useState(null);

  const API_KEY = "AIzaSyCf2ymIc7M9-YaFmwm_V1krweRPkRiFtK0";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${customURL}&key=${API_KEY}`
      );
      setVideoInfo(response.data.items[0].snippet);
    };

    if (customURL !== "") {
      fetchData();
    }
  }, [customURL]);

  useEffect(() => {
    if (customURL === "") {
      setCurrentVideoIdx(1);
      setPlayer(null);
      setShow(false);
    }
  }, [customURL]);

  const onReady = useCallback(
    (event) => {
      setPlayer(event.target);
      event.target.setLoop(true);
      event.target.playVideo();
    },
    [setPlayer]
  );

  const onEnd = useCallback(() => {
    setCurrentVideoIdx((currentVideoIdx + 1) % videoIds.length);
    player.loadVideoById(videoIds[currentVideoIdx]);
  }, [currentVideoIdx, videoIds, player]);

  const onCustomEnd = useCallback((event) => {
    setPlayer(event.target);
    event.target.playVideo();
  });

  const opts = {
    width: "1",
    height: "1",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const handleMute = () => {
    if (show === true) {
      setShow(false);
    } else if (show === false) {
      setShow(true);
    }
  };

  const handleBack = () => {
    currentVideoIdx === 0
      ? setCurrentVideoIdx(videoIds.length - 1)
      : setCurrentVideoIdx((currentVideoIdx) => currentVideoIdx - 1);
  };

  const handleForward = () => {
    currentVideoIdx === videoIds.length - 1
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
                    <i>
                      {customURL !== "" && videoInfo !== null
                        ? videoInfo.title
                        : cardDescription[currentVideoIdx][0]}
                    </i>
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#fff", mt: 0.25 }}
                  >
                    {`by: `}
                    {customURL !== "" && videoInfo !== null
                      ? videoInfo.channelTitle
                      : cardDescription[currentVideoIdx][1]}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ m: -2 }}>
          {show === true ? (
            <YouTube
              videoId={
                customURL !== "" && videoInfo !== null
                  ? customURL
                  : videoIds[currentVideoIdx]
              }
              opts={opts}
              onReady={onReady}
              onEnd={
                customURL !== "" && videoInfo !== null ? onCustomEnd : onEnd
              }
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
              onClick={(e) => handleMute(e)}
              sx={{ color: "#fff" }}
            >
              <VolumeUpIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Unmute"
              onClick={(e) => handleMute(e)}
              sx={{ color: "#fff" }}
            >
              <VolumeOffIcon />
            </IconButton>
          )}
          {customURL !== "" && videoInfo !== null ? (
            <IconButton
              aria-label="clear custom"
              onClick={() => setCustomURL("")}
              sx={{ color: "#fff" }}
            >
              <BackspaceIcon />
            </IconButton>
          ) : null}
        </Box>
      </CardWrapper>
    </>
  );
}
