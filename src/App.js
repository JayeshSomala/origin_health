import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Login from './components/Login';
import NormalDashboard from './components/NormalDashboard';
import AdminDashboard from './components/AdminDashboard';
import ImageContextProvider from './contexts/ImageContext';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (username, password) => {
    // Here you would normally make an API call to authenticate the user with the server.
    // For this example, we'll just check if the username and password match.
    console.log("i am in");
    if (username === 'admin' && password === 'password') {
      setIsAdmin(true);
      setLoggedIn(true);
    } else if (username === 'user' && password === 'password') {
      setIsAdmin(false);
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ImageContextProvider>
          <Navbar loggedIn={loggedIn} isAdmin={isAdmin} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={
                loggedIn ? (
                  isAdmin ? (
                    <AdminDashboard handleLogout={handleLogout} />
                  ) : (
                    <NormalDashboard handleLogout={handleLogout} />
                  )
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </ImageContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
