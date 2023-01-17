import "./App.css";
import { Nav, Timer, YoutubeReact, Footer, Tasks, PomoCounter, LofiCard } from "./components/index";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

function App() {
  return (
    <>
    <Paper
        sx={{
          '@media (max-height: 500px)': {
            height: '100%'
          },
          bgcolor: "#E3F2FD", height: "100vh", width: "100%" }}
        elevation={4}
      >
      <Nav />
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={10}
            lg={8}
            sx={{
              '@media (min-width: 300px)': {
                marginTop: '2.5vh',
              },
            }}
          >
            <Paper
              elevation={8}
              sx={{
                bgcolor: "#fff", height: "100%", width: "100%", borderRadius:"15px"
              }}
            >
              <Timer />
            </Paper>
          </Grid>
          <Grid item xs={10} lg={2}>
          <Paper
              elevation={8}
              sx={{
                bgcolor: "#fff", height: "100%", width: "100%", borderRadius:"15px"
              }}
            >
              <Tasks/>
            </Paper>
          </Grid>
          <Grid item xs={10} lg={5}>
          <Paper
              elevation={8}
              sx={{
                bgcolor: "#fff", height: "100%", width: "100%", borderRadius:"15px"
              }}
            >
              <PomoCounter/>
            </Paper>
          </Grid>
          <Grid item xs={10} lg={5}>
          <Paper
              elevation={8}
              sx={{
                bgcolor: "#fff", height: "100%", width: "100%", borderRadius:"15px"
              }}
            >
              {/* <LofiCard/> */}
              <YoutubeReact/>
            </Paper>
          </Grid>
        </Grid>
      <Footer />
      </Paper>
    </>
  );
}

export default App;

{/* <YoutubeReact /> */}
