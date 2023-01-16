import "./App.css";
import { Nav, Timer, FAQ, YoutubeReact, Footer } from "./components/index";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <>
      <Nav />
      <Paper
        sx={{ bgcolor: "#f5f5f5", height: "100%", width: "100%" }}
        elevation={4}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            sx={{ mt: 10 }}
          >
            <Timer />
          </Grid>
          <Grid
            item
            sx={{ m: 5 }}
          >
            <YoutubeReact />
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </>
  );
}

export default App;
