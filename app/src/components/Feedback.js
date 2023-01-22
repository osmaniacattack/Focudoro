import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, ValidationError } from '@formspree/react';

const theme = createTheme();

export default function Feedback() {
  const [state, handleSubmit] = useForm("mjvdklbj");
  if (state.succeeded) {
    return <p>Thank you for the feedback!<br/>We appreciate your interest in improving Focudoro.</p>
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FeedbackIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Have Feedback?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              multiline
              rows={4}
              required
              fullWidth
              name="message"
              label="Message"
              id="message"
            />
            <Button
              type="submit"
              disabled={state.submitting}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}