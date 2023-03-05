import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import React from "react";

export default function UpdateCard(props) {
  const {dateTitle, changes} = props;
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
            {dateTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Nunito"
          >
            {changes}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
