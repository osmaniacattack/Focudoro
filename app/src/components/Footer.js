import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="info"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          color="white"
          fontFamily={"Nunito"}
          fontWeight={700}
        >
          <Link
            href="https://www.buymeacoffee.com/aqosman"
            target="_blank"
            underline="none"
            rel="noreferrer"
            color="inherit"
          >
            Love Focudoro? Buy me a ☕
          </Link>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}
