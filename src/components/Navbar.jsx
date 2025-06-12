import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  console.log("Logo Source:", logo); // Debugging step
  
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{
        backgroundColor: '#00312F',
        position: 'sticky',
        top: 0,
        justifyContent: "space-between"
      }}
    >
      {/* Logo + HRD Text */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="logo" height={45} />
        
        {/* Check if HRD is visible */}
        <Typography 
          variant="h1" 
          sx={{ 
            color: "whitesmoke",  // Make sure it's visible
            fontWeight: "bold", 
            ml: 2,  // Space between logo and text
            fontSize: "28px",
          }}
        >
          CodeTube
        </Typography>
      </Link>

      {/* Search Bar */}
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
