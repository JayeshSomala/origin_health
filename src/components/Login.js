import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
}));

function Login({ handleLogin }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // call handleLogin function from App component with username and password arguments
    handleLogin(username, password);
    // navigate to dashboard page after successful login
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Username"
          variant="outlined"
          className={classes.textField}
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          className={classes.textField}
          value={password}
          onChange={handlePasswordChange}
        />
        <label>
          <input type="checkbox" checked={isAdmin} onChange={handleAdminCheckboxChange} />
          <span>Admin Login</span>
        </label>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
