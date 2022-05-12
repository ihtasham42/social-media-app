import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "../Copyright";

const LoginView = () => {
  return (
    <Container maxWidth={"xs"} sx={{ mt: 6 }}>
      <Stack alignItems="center">
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          <Link href="/" color="inherit" underline="none">
            PostIt
          </Link>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Typography color="text.secondary">
          Don't have an account yet? <Link href="/signup">Sign Up</Link>
        </Typography>
        <Box component="form">
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            autoFocus
            required
            id="email"
            name="email"
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="email"
            id="email"
            name="email"
          />
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Login
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Copyright />
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;
