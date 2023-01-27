import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import React, { useState, useContext } from "react";
import Background from "../assets/background.png";
import Blob from "../assets/blob2.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../App";
import jwt_decode from "jwt-decode";
import Question from "../assets/question.png";
import Research from "../assets/research.png";
import Idea from "../assets/idea.png";
import Music from "../assets/music.png";
import FAQ from "./FAQ";

export default function Landing() {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${Blob})`,
          backgroundSize: "cover",
          height: "50vh",
        }}
      >
        <Grid item xs={0} md={2}/>
        <Grid
          item
          xs={12} md={8}
          sx={{ m:5 }}
        >
          <Typography
            variant={"h2"}
            fontFamily={"Nunito"}
            fontWeight={700}
            color="#fff"
          >
            Focudoro
          </Typography>
          <Typography
            variant="h4"
            fontFamily={"Nunito"}
            fontWeight={700}
            color="#fff"
          >
            productivity with chill, lo-fi vibes.
          </Typography>
          <Typography
            fontFamily={"Nunito"}
            fontWeight={300}
            color="#fff"
            sx={{ mb: 5 }}
          >
            <i>{`Hey, scroll down to learn more :)`}</i>
          </Typography>
          <GoogleOAuthProvider clientId="497316340818-l1clnun305pgv50b7h5tmr52q3apkp76.apps.googleusercontent.com">
            <GoogleLogin
              shape="rectangular"
              onSuccess={async (credentialResponse) => {
                try {
                  let userObject = jwt_decode(credentialResponse.credential);
                  setUser(userObject);
                  localStorage.setItem("user", JSON.stringify(userObject));
                } catch (err) {
                  console.log(err);
                }
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </Grid>
        <Grid item xs={0} md={2}/>
      </Grid>
      <Grid
        container
        sx={{ my: 10 }}
      >
        <Grid
          item
          xs={1} sm={3}
        />
        <Grid
          item
          xs={10} sm={6}
        >
          <FAQ />
        </Grid>
        <Grid
          item
          xs={1} sm={3}
        />
      </Grid>
    </>
  );
}
