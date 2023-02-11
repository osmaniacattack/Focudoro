import * as React from "react";
import { Typography, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";
import UpdateCard from "./UpdateCard";
import SecondUpdateCard from "./SecondUpdateCard";

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
          textAlign={"center"}
          sx={{m:1}}
          color="primary"
          fontWeight={700}
          fontFamily="Nunito"
        >{`What's New?`}</Typography>
        <UpdateCard />
        <Divider sx={{my:1}} />
        <SecondUpdateCard />
      </Grid>
      <Grid
        item
        xs={1}
      />
    </Grid>
  );
}
