import YouTubePlayer from 'youtube-player'
import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

export default function Youtube() {
  const [videoIds, setVideoIds] = useState(['jfKfPfyJRdk', 'e3L1PIY1pN8', '7NOSDKb0HlU']);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(1);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    setPlayer(YouTubePlayer('player', {
      videoId: videoIds[currentVideoIdx],
      playerVars: {
        autoplay: 1
      }
    }))
    if (player) {
      player.on('ended',() => {
        setCurrentVideoIdx((currentVideoIdx + 1) % videoIds.length);
        player.loadVideoById(videoIds[currentVideoIdx]);
      });
    }
    return () => {
      if (player) {
        player.destroy();
      }
    }
  }, [player, currentVideoIdx, videoIds]);

  return (
    <Box sx={{m:6}}>
      <div id="player"/>
    </Box>
  )
}
