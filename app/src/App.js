import "./App.css";
import { Nav, Timer, FAQ } from "./components/index";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <>
      <Nav />
      <Paper
        sx={{ p: "20px", m: "20px", bgcolor: "#f5f5f5", height:"85vh" }}
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
            xs={3}
            sx={{ mt: 10 }}
          >
            <Timer />
          </Grid>
        </Grid>
        </Paper>
    </>
  );
}

export default App;
