'use client';

import React, { useState } from 'react';
import { Container, Card, TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = new URLSearchParams();
    if (keywords) query.append('keywords', keywords);
    if (location) query.append('location', location);

    router.push(`/jobs?${query.toString()}`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'azure', 
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ p: 4, textAlign: 'center', boxShadow: 3, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Job Search
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={2}>
            Enter keywords and location to find jobs
          </Typography>

          <form onSubmit={handleSearch}>
            <TextField
              fullWidth
              label="Job Keywords"
              placeholder="e.g. Software Engineer, Designer"
              variant="outlined"
              margin="normal"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <TextField
              fullWidth
              label="Location"
              placeholder="e.g. New York, Remote"
              variant="outlined"
              margin="normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: 'bold' }}
            >
              Search Jobs
            </Button>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default HomePage;
