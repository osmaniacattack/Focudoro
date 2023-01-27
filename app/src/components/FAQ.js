import * as React from "react";
import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArticleIcon from "@mui/icons-material/Article";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function FAQ() {
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
          fontFamily={"Nunito"}
          textAlign={"center"}
          color="#2D728F"
        >
          What is Focudoro?
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ m: 1 }}
        >
          <QuestionMarkIcon sx={{ color: "#e6b400", fontSize: "6rem" }} />
        </Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          color="#2D728F"
          fontFamily={"Nunito"}
          sx={{ m: 2 }}
        >
          Focudoro is a web app designed to help you focus and accomplish your
          goals. It is inspired by the Pomodoro™ Technique, a time management
          method developed by Francesco Cirillo in the late 1980s. This
          technique uses a timer to break down works into a set of intervals
          separated by breaks. The Pomodoro technique increases productivity by
          taking short scheduled breaks regularly.
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign={"center"}
          color="#2D728F"
          fontFamily={"Nunito"}
        >
          How Does It Work?
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ m: 1 }}
        >
          <AccessAlarmIcon sx={{ color: "#e6b400", fontSize: "6rem" }} />
        </Typography>

        <Typography
          variant="body1"
          color="#2D728F"
          sx={{ m: 1 }}
        >
          <List>
            <ListItem>
              <ListItemText
                primary={`1. Define tasks to complete in a 25 minute study instance (aka one
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
          fontFamily={"Nunito"}
        >
          Disclaimer
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ m: 1 }}
        >
          <ArticleIcon sx={{ color: "#e6b400", fontSize: "6rem" }} />
        </Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          color="#2D728F"
          sx={{ m: 2 }}
          fontFamily={"Nunito"}
        >
          Pomodoro™ and Pomodoro Technique® are registered trademarks of
          Francesco Cirillo. This web app is not affiliated with Francesco
          Cirillo.
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign={"center"}
          color="#2D728F"
          fontFamily={"Nunito"}
        >
          Why Focudoro?
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ m: 2 }}
        >
          <HeadphonesIcon sx={{ color: "#e6b400", fontSize: "6rem" }} />
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={500}
          color="#2D728F"
          sx={{ m: 2 }}
          fontFamily={"Nunito"}
        >
          In addition to the Pomodoro timer, you can <u>add your own tasks</u>{" "}
          and it will be saved with the Google account you login with for the
          session you are logged in with. Furthermore, this web app currently
          allows you to add a YouTube video of your choice to listen to on loop
          as well as having up to{" "}
          <u>six different live lo-fi streams on YouTube</u> for your
          convenience! Those streams are:
          <ul>
            {cardDescription.map((card, index) => {
              return (
                <li key={index}>
                  {card[0]} by {card[1]}
                </li>
              );
            })}
          </ul>
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
      />
    </Grid>
  );
}
