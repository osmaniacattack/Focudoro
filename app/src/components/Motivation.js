import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

export default function Motivation() {
  const [goal, setGoal] = useState("");
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ m: 5 }}
        textAlign={"center"}
      >
        What is your goal today?
      </Typography>
      <Box
        sx={{
          width: "70%",
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <TextField
          fullWidth
          value={goal}
          variant="standard"
          onChange={(e) => setGoal(e.target.value)}
        />
      </Box>
      <Box>
        <Button
          sx={{
            width: "100%",
            maxWidth: "100%",
            mt: 3
          }}
          variant="text"
        >
          Set Goal
        </Button>
      </Box>
    </Container>
  );
}
