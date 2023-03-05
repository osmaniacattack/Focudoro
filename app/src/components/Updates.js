import * as React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import UpdateCard from "./UpdateCard";
import { UPDATES } from "../utils/updates";

export default function FAQ() {
  return (
    <Grid container sx={{maxHeight: "80vh"}}>
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
          sx={{ m: 1 }}
          color="primary"
          fontWeight={700}
          fontFamily="Nunito"
        >{`What's New?`}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          fontFamily="Nunito"
          sx={{ m: 2 }}
        >
          Updates to Focudoro will be implemented pending user feedback and
          necessary enhancements.
        </Typography>
        {UPDATES.map((update) => {
          return (
            <UpdateCard
              dateTitle={update[0]}
              changes={update[1]}
            />
          );
        })}
        <Divider sx={{ my: 1 }} />
      </Grid>
      <Grid
        item
        xs={1}
      />
    </Grid>
  );
}
