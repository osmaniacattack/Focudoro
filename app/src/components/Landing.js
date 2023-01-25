import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import React from "react";
import Background from "../assets/bgImage.png";
import FAQ from "./FAQ";

export default function Landing() {
  return (
    <Grid container>
      <Paper
        sx={{ backgroundColor: "#E3F2FD", width: "100%", height: "100vh" }}
        elevation={0}
      >
        <Grid
          item
          xs={12}
        >
          <Container sx={{ mt: 10 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: "4rem", fontWeight: 600 }}
              textAlign={"center"}
            >
              Focudoro
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "3rem", fontWeight: 200 }}
              textAlign={"center"}
            >
              Your Space to Vibe Productively.
            </Typography>
            {/* <Typography textAlign={"center"}>
              <Button
                color="warning"
                size="large"
                variant="contained"
              >
                Get Started
              </Button>
            </Typography> */}
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography textAlign={"center"}>
            <img
              src={Background}
              width="40%"
            />
          </Typography>
        </Grid>
      </Paper>
      <Grid
        item
        xs={12}
        sx={{ mt: 10, mb:10 }}
      >
        <Grid container>
          <Grid
            item
            xs={0}
            sm={3}
          />
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FAQ />
          </Grid>
          <Grid
            item
            xs={0}
            sm={3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
