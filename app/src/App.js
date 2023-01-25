import "./App.css";
import {
  Nav,
  Timer,
  YoutubeReact,
  Footer,
  Tasks,
  PomoCounter,
  Landing,
} from "./components/index";
import { Grid, Paper, Button, Typography, Container } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";

export const PomoContext = createContext();
export const UserContext = createContext();
export const AudioContext = createContext();
export const StudyContext = createContext();
export const YoutubeContext = createContext();

function App() {
  const [pomoCount, setPomoCount] = useState(0);
  const [user, setUser] = useState({});
  const [audio, setAudio] = useState("vintage");
  const [studyTime, setStudyTime] = useState(25);
  const [customURL, setCustomURL] = useState("");
  let localUser = JSON.parse(localStorage.getItem("user"));
  let localPomoCount = JSON.parse(localStorage.getItem("pomoCounts"));

  useEffect(() => {
    if (localUser) {
      if (localUser.exp < Date.now() / 1000) {
        localStorage.removeItem("user");
      }
      setUser(localUser);
    }
  }, []);

  useEffect(() => {
    if (localPomoCount) {
      setPomoCount(localPomoCount);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <PomoContext.Provider value={[pomoCount, setPomoCount]}>
        <AudioContext.Provider value={[audio, setAudio]}>
          <StudyContext.Provider value={[studyTime, setStudyTime]}>
            <YoutubeContext.Provider value={[customURL, setCustomURL]}>
              <Paper
                sx={{
                  bgcolor: "#E3F2FD",
                  height: "100vh",
                  width: "100%",
                  "@media (max-width: 1199px)": {
                    height: "100%",
                  },
                }}
                elevation={4}
              >
                <Nav />
                {Object.keys(user).length === 0 ? (
                  <Paper
                    sx={{
                      bgcolor: "#fff",
                      width: "100%",
                      "@media (max-width: 1199px)": {
                        height: "100%",
                      },
                    }}
                    elevation={4}
                  >
                    <Landing />
                  </Paper>
                ) : (
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ bgColor: "#E3F2FD" }}
                  >
                    <Grid
                      item
                      xs={10}
                      lg={7}
                      sx={{
                        "@media (min-width: 300px)": {
                          marginTop: "2.5vh",
                        },
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{
                          bgcolor: "#fff",
                          height: "100%",
                          width: "100%",
                          borderRadius: "15px",
                        }}
                      >
                        <Timer />
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      lg={3}
                    >
                      <Paper
                        elevation={8}
                        sx={{
                          bgcolor: "#fff",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Tasks />
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      lg={5}
                    >
                      <Paper
                        elevation={8}
                        sx={{
                          bgcolor: "#fff",
                          height: "100%",
                          width: "100%",
                          borderRadius: "15px",
                        }}
                      >
                        <PomoCounter />
                      </Paper>
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      lg={5}
                    >
                      <Paper
                        elevation={8}
                        sx={{
                          bgcolor: "#fff",
                          height: "100%",
                          width: "100%",
                          borderRadius: "15px",
                        }}
                      >
                        <YoutubeReact />
                      </Paper>
                    </Grid>
                  </Grid>
                )}
                <Footer />
              </Paper>
            </YoutubeContext.Provider>
          </StudyContext.Provider>
        </AudioContext.Provider>
      </PomoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
