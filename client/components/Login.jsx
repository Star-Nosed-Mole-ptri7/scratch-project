import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style.css";

const theme = createTheme();

export default function SignIn({ setLoggedIn }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('./', {
        email,
        password
      })
      .then((res) => {
        setEmail('');
        setPassword('')
        setLoggedIn(true)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className='tag'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(to right bottom, #D3D3D3, #FFFFFF	)',
            borderRadius: 3,
            opacity: 0.8
          }}
        >
          <Avatar sx={{ m: 1, background: '#228B22' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "linear-gradient(to right bottom, #3ce666, #1957c2)"}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#/Signup" variant="body2" sx={{color: '#228B22'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}