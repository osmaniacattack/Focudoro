import "./App.css";
import { Nav, Timer, YoutubeReact, Footer } from "./components/index";
import { Grid, Paper } from "@mui/material";
import React from "react";

function App() {
  return (
    <>
    <Paper
        sx={{
          '@media (max-height: 500px)': {
            height: '100%'
          },
          bgcolor: "#f5f5f5", height: "100vh", width: "100%" }}
        elevation={4}
      >
      <Nav />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
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
              <YoutubeReact />
            </Paper>
          </Grid>
        </Grid>
      <Footer />
      </Paper>
    </>
  );
}

export default App;
