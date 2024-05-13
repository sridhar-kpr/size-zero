import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeSizePage from './components/HomeSizePage';
import Home from './components/Home';
import HandSizePage from './components/Handsizepge';
import Navbar from './components/Navbar';
import { Helmet } from "react-helmet";
import Pocket from './components/Pocket';
import Placket from './components/Placket';
import Login from './components/login';
import SignupForm from './components/signup';
import { DoubleNavbar } from './components/Misternewtrail';
import Landing from './components/Landing';
import Mycart from './components/Mycart';


function App() {
  const [token, setToken] = useState('');

  const handleLogin = async (loginData) => {
    try {
      const response = await fetch('http://localhost:5050/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      setToken(data.token);
      console.log(data); // Handle the response as needed
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignup = async (userData) => {
    try {
      const response = await fetch('http://localhost:5050/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data); // Handle the response as needed
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <MantineProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Router>
          <div>
            {/* <Navbar /> */}
            <Routes>
              {/* <Route path="/home" element={<Login onLogin={handleLogin} />} /> */}
              <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} />
              {/* <Route path="/" element={ <DoubleNavbar /> } /> */}
              <Route path="/" element={ <Landing /> } />
                            <Route path="/home" element={ < Home/> } />
                            <Route path="/cart" element={<Mycart />} />

              <Route path="/collar" element={<HomeSizePage />} />
              <Route path="/hand" element={<HandSizePage />} />
              <Route path="/pocket" element={<Pocket />} />
              <Route path="/placket" element={<Placket />} />
            </Routes>
          </div>
        </Router>
      </MantineProvider>
    </div>
  );
}

export default App;
