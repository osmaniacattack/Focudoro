import * as React from "react";
import CircularStatic from "./CircularStatic";

export default function Timer() {
  return (
    <>
      <CircularStatic />
    </>
  );
}

// When a user's countdown timer hits 0, make an API call to update the user's total pomodoro, pomodoro minutes