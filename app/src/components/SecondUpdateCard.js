import {
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";

export default function UpdateCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontFamily="Nunito"
          >
            Version 1.2 Updates - Feb. 3, 2023
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Nunito"
          >
            The following changes have been implemented:
            <ul>
              <li>Included the new user analytics, Focu Feats!</li>
              <li>Renamed Tasks to FocuTasks</li>
              <li>Added an ambient radio to listen to in addition to standard radio</li>
              <li>Condensed radios to dropdown for minimization options</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily="Nunito"
          >
            Updates to Focudoro will be added bi-weekly pending user feedback
            and necessary enhancements.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
