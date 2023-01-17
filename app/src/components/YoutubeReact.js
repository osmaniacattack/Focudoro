import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import YouTube from "react-youtube";

export default function YoutubeReact() {
  const [videoIds] = useState([
    "jfKfPfyJRdk",
    "kgx4WGK0oNU",
    "e3L1PIY1pN8",
    "7NOSDKb0HlU",
    "IUT1qAhMY4w",
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
      ? setCurrentVideoIdx(4)
      : setCurrentVideoIdx((currentVideoIdx) => currentVideoIdx - 1);
  };

  const handleForward = () => {
    currentVideoIdx === 4
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
  ];

  return (
    <>
      <Typography textAlign={"center"}>
        <Button
          size="medium"
          variant="contained"
          sx={{ mb: 3, mt: 3 }}
          color="warning"
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Study Without Lo-Fi Radio" : "Study with Lo-Fi Radio"}
        </Button>
      </Typography>
      {show ? (
        <Card sx={{ display: "flex", p:2, mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
              >
                {cardDescription[currentVideoIdx][0]}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                by: {cardDescription[currentVideoIdx][1]}
              </Typography>
            </CardContent>
            <YouTube
              videoId={videoIds[currentVideoIdx]}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
            />
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
              >
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
        </Card>
      ) : null}
    </>
  );
}
