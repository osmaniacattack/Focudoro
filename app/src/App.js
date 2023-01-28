import "./App.css";
import {
  Nav,
  Timer,
  YoutubeReact,
  Footer,
  Tasks,
  Landing,
} from "./components/index";
import { Grid, Paper } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";
import Blob from "./assets/blob2.svg";

export const PomoContext = createContext();
export const UserContext = createContext();
export const AudioContext = createContext();
export const StudyContext = createContext();
export const BreakContext = createContext();
export const RestContext = createContext();
export const YoutubeContext = createContext();

function App() {
  const [pomoCount, setPomoCount] = useState(0);
  const [user, setUser] = useState({});
  const [audio, setAudio] = useState("vintage");
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
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
            <BreakContext.Provider value={[breakTime, setBreakTime]}>
              <RestContext.Provider value={[restTime, setRestTime]}>
                <YoutubeContext.Provider value={[customURL, setCustomURL]}>
                  <Nav />
                  {Object.keys(user).length === 0 ? (
                    <Landing />
                  ) : (
                    <Paper
                      sx={{
                        backgroundImage: `url(${Blob})`,
                        backgroundSize: "cover",
                        height: "auto",
                        width: "100%",
                        "@media (min-width: 900px)": {
                          height: "100vh",
                        },
                      }}
                      elevation={4}
                    >
                      <Grid
                        container
                        display="flex"
                        direction="row"
                        sx={{ bgColor: "#E3F2FD" }}
                      >
                        <Grid
                          item
                          xs={10}
                          md={8}
                          sx={{
                            "@media (min-width: 300px)": {
                              marginTop: "2.5vh",
                            },
                            m: "auto",
                          }}
                        >
                          <Paper
                            elevation={8}
                            sx={{
                              bgcolor: "#fff",
                              height: "100%",
                              width: "100%",
                              borderRadius: "20px",
                              p: 2,
                              "@media (max-width: 500px)": {
                                mx: -2,
                              },
                            }}
                          >
                            <Timer />
                            <YoutubeReact />
                          </Paper>
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          md={3}
                          sx={{ m: "auto" }}
                        >
                          <Paper
                            elevation={8}
                            sx={{
                              bgcolor: "#fff",
                              height: "100%",
                              width: "100%",
                              borderRadius: "20px",
                              "@media (min-width: 300px)": {
                                mb: 5,
                                mt: 4,
                              },
                            }}
                          >
                            <Tasks />
                          </Paper>
                        </Grid>
                      </Grid>
                      <Footer />
                    </Paper>
                  )}
                </YoutubeContext.Provider>
              </RestContext.Provider>
            </BreakContext.Provider>
          </StudyContext.Provider>
        </AudioContext.Provider>
      </PomoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
