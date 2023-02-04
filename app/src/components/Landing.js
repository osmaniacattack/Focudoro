/// Lenovo Yoga 720

import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Blob from "../assets/blob2.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../App";
import jwt_decode from "jwt-decode";
import FAQ from "./FAQ";
import axios from "axios";

// Find a way to track login amounts
// Idea: create an array of logged in times? when a user logs in, the date.now would be added to the array...
// when pulling data for total logged in, we will only account for single days

export default function Landing() {
  const [user, setUser] = useContext(UserContext);
  const today = new Date().toDateString();

  function updateLoginArray(loginArray) {
    const today = new Date().toDateString();
    if (!loginArray.includes(today)) {
      loginArray.push(today);
    }
    return loginArray;
  }

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
        <Grid
          item
          xs={0}
          md={2}
        />
        <Grid
          item
          xs={12}
          md={8}
          sx={{ m: 5 }}
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
                  const config = {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                    },
                  };

                  let userObject = jwt_decode(credentialResponse.credential);
                  // add function to send user email, name and given name to backend;

                  let body = {
                    email: userObject.email,
                    given_name: userObject.given_name,
                    family_name: userObject.family_name,
                  };
                  const mongoUser = await axios.post(
                    "https://focudoro-backend.onrender.com/api/users",
                    body,
                    config
                  );

                  if (!mongoUser.data.user.totalDays.includes(today)) {
                    let updatedBody = {
                      totalDays: mongoUser.data.user.totalDays.push(today),
                    };
                    const updatedMongoUser = await axios.put(
                      `https://focudoro-backend.onrender.com/api/users/${mongoUser.data.user._id}`,
                      updatedBody,
                      config
                    );
                    setUser(updatedMongoUser.data.user);
                    localStorage.setItem(
                      "user",
                      JSON.stringify(updatedMongoUser.data.user)
                    );
                  } else {
                    setUser(mongoUser.data.user);
                    localStorage.setItem(
                      "user",
                      JSON.stringify(mongoUser.data.user)
                    );
                  }
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
        <Grid
          item
          xs={0}
          md={2}
        />
      </Grid>
      <Grid
        container
        sx={{ my: 10 }}
      >
        <Grid
          item
          xs={1}
          sm={3}
        />
        <Grid
          item
          xs={10}
          sm={6}
        >
          <FAQ />
        </Grid>
        <Grid
          item
          xs={1}
          sm={3}
        />
      </Grid>
    </>
  );
}
