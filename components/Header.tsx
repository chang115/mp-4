import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#005f73',  
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <title>Job Search App</title>
      <nav>
        <Link href="/">
          <Typography
            variant="h1"
            sx={{
              textDecoration: 'none', 
              color: 'white',  
            }}
          >
            Job Search App
          </Typography>
        </Link>
      </nav>
    </Box>
  );
};

export default Header;
