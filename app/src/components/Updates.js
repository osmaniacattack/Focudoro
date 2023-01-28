import * as React from "react";
import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import UpdateCard from "./UpdateCard";

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
      </Grid>
      <Grid
        item
        xs={1}
      />
    </Grid>
  );
}
