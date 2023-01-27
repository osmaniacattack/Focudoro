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
            Version 1.1 Updates - Jan. 27, 2023
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Nunito"
          >
            The following changes have been implemented:
            <ul>
              <li>Included an {`Updates`} tab to review version updates</li>
              <li>
                Changed STOP button to PAUSE within the timer section to more
                accurately reflect the interaction
              </li>
              <li>Cleared user text entry when adding a new task</li>
              <li>Added custom timer settings for Break and Rest</li>
              <li>Added an alarm for Break and Rest</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily="Nunito"
          >
            Updates to Focudoro will be added bi-weekly pending user feedback and necessary enhancements.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
