import "./App.css";
import {
  Nav,
  Timer,
  YoutubeReact,
  Footer,
  Tasks,
  Landing,
  AmbientRadio,
  Analytics,
  TimerToggles,
} from "./components/index";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import InsightsIcon from "@mui/icons-material/Insights";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState, createContext, useEffect } from "react";
import Blob from "./assets/blob2.svg";
import LowPoly from "./assets/lowPoly.svg";
import Waves from "./assets/waves.svg";

export const PomoContext = createContext();
export const UserContext = createContext();
export const AudioContext = createContext();
export const StudyContext = createContext();
export const BreakContext = createContext();
export const RestContext = createContext();
export const YoutubeContext = createContext();
export const TimerContext = createContext();
export const BackgroundContext = createContext();

let localUser = JSON.parse(localStorage.getItem("user"));
let localPomoCount = JSON.parse(localStorage.getItem("pomoCounts"));

function App() {
  const [pomoCount, setPomoCount] = useState(0);
  const [user, setUser] = useState({});
  const [audio, setAudio] = useState("soft");
  const [background, setBackground] = useState("waves");
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
  const [customURL, setCustomURL] = useState("");
  const [type, setType] = useState("focus");

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
        <BackgroundContext.Provider value={[background, setBackground]}>
          <AudioContext.Provider value={[audio, setAudio]}>
            <StudyContext.Provider value={[studyTime, setStudyTime]}>
              <BreakContext.Provider value={[breakTime, setBreakTime]}>
                <RestContext.Provider value={[restTime, setRestTime]}>
                  <TimerContext.Provider value={[type, setType]}>
                    <YoutubeContext.Provider value={[customURL, setCustomURL]}>
                      <Nav />
                      {Object.keys(user).length === 0 ? (
                        <Landing />
                      ) : (
                        <Paper
                          sx={{
                            backgroundImage: `url(${
                              background === "blob"
                                ? Blob
                                : background === "waves"
                                ? Waves
                                : LowPoly
                            })`,
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
                              md={1}
                              sx={{
                                "@media (min-width: 300px)": {
                                  marginTop: "2.5vh",
                                },
                                m: "auto",
                                display: {
                                  xs: "none",
                                  sm: "none",
                                  md: "none",
                                  lg: "block",
                                  xl: "block",
                                },
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
                                <TimerToggles />
                              </Paper>
                            </Grid>
                            <Grid
                              item
                              xs={10}
                              md={7}
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
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<MusicNoteIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography
                                      variant="h6"
                                      fontFamily={"Nunito"}
                                      color="primary"
                                      fontWeight={1000}
                                      fontStyle="italic"
                                    >
                                      LoFi Radio
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <YoutubeReact />
                                  </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor: "#1976D2" }}>
                                  <AccordionSummary
                                    expandIcon={<MusicNoteIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                  >
                                    <Typography
                                      variant="h6"
                                      fontFamily={"Nunito"}
                                      color="#fff"
                                      fontWeight={1000}
                                      fontStyle="italic"
                                    >
                                      Ambience Radio
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <AmbientRadio />
                                  </AccordionDetails>
                                </Accordion>
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
                                <Accordion defaultExpanded={true}>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography color="primary">
                                      <InsightsIcon />
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      fontFamily={"Nunito"}
                                      color="primary"
                                      fontWeight={1000}
                                      sx={{ mt: -0.5, ml: 1 }}
                                    >
                                      {`FocuFeats`}
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Analytics />
                                  </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography color="primary">
                                      <AssignmentIcon />
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      fontFamily={"Nunito"}
                                      color="primary"
                                      fontWeight={1000}
                                      sx={{ mt: -0.5, ml: 1 }}
                                    >
                                      {`FocuTasks`}
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Tasks />
                                  </AccordionDetails>
                                </Accordion>
                              </Paper>
                            </Grid>
                          </Grid>
                          <Footer />
                        </Paper>
                      )}
                    </YoutubeContext.Provider>
                  </TimerContext.Provider>
                </RestContext.Provider>
              </BreakContext.Provider>
            </StudyContext.Provider>
          </AudioContext.Provider>
        </BackgroundContext.Provider>
      </PomoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
