import * as React from "react";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Question from "../assets/question.png";
import Clock from "../assets/clock.png";
import Research from "../assets/research.png";

export default function FAQ() {

  return (
      <Grid container>
        <Grid
          item
          xs={1}
        />
        <Grid
          item
          xs={10}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign={"center"}
            color="#2D728F"
          >
            What is Pomodoro?
          </Typography>
          <Typography textAlign={"center"}>
            <img
              src={Question}
              width="25%"
              alt="Question icon"
            />
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            textAlign={"center"}
            color="#2D728F"
            sx={{ m: 2 }}
          >
            The Pomodoro™ Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. This technique uses a timer to
            break down works into a set of intervals separated by breaks.
            Pomodoro technique increases productivity by taking short scheduled
            breaks regularly.
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign={"center"}
            color="#2D728F"
          >
            How Does It Work?
          </Typography>
          <Typography textAlign={"center"}>
            <img
              src={Clock}
              width="25%"
              alt="Clock icon"
            />
          </Typography>

          <Typography
            variant="body1"
            textAlign={"center"}
            color="#2D728F"
            sx={{ m: 2 }}
          >
            <List>
              <ListItem>
                <ListItemText
                  primary={`1.Define tasks to complete in a 25 minute study instance (aka one
              pomodoro)`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Work on a task until the timer goes off" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. After timer completion, put checkmarks next to completed tasks" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`4. Take a 5 minute short break (5 minutes)`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`5. Work for another pomodoro. After four “Pomodoro”, take a long
              break. (15 minutes)`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="6. Repeat step 1" />
              </ListItem>
            </List>
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign={"center"}
            color="#2D728F"
          >
            Disclaimer
          </Typography>
          <Typography textAlign={"center"}>
            <img
              src={Research}
              width="25%"
              alt="Pen and paper icon"
            />
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            textAlign={"center"}
            color="#2D728F"
            sx={{ m: 2 }}
          >
            Pomodoro™ and Pomodoro Technique® are registered trademarks of
            Francesco Cirillo. This web app is not affiliated with Francesco
            Cirillo.
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
        />
      </Grid>
  );
}
