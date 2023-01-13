import * as React from "react";
import { Button, Container, Grid } from "@mui/material";
import Motivation from "./Motivation";
import CircularStatic from "./CircularStatic";

export default function Timer() {
  return (
    <>
      <CircularStatic />
      <Grid
        container
        sx={{ m: 2 }}
      >
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
          >
            Focus
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
          >
            Short Break
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Button
            fullWidth
            variant="text"
          >
            Long Break
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
