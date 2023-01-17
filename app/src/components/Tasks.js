import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// install axios

export default function Tasks() {
  return (
    <>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={0}
          >
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignContent="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="h6" color="primary">My Tasks</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                  >
                    Test
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="info"
                  >
                    Notes notes notes notes
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1.5 }} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                  >
                    Test
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="info"
                  >
                    Notes notes notes notes
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1.5 }} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                  >
                    Test
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="info"
                  >
                    Notes notes notes notes
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1.5 }} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                  >
                    Test
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    color="info"
                  >
                    Notes notes notes notes
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1.5 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
