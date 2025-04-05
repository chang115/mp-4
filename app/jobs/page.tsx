'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Card, Typography, Box, CircularProgress, Alert } from '@mui/material';
import JobList from '../../components/JobList';

const JobsPage = () => {
  const searchParams = useSearchParams();
  const keywords = searchParams.get('keywords') || '';
  const location = searchParams.get('location') || '';

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      if (!keywords && !location) return;

      setLoading(true);
      setError('');
      setJobs([]);

      try {
        const response = await fetch('/api/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keywords, location }),
        });

        const data = await response.json();

        if (response.ok && data.jobs) {
          setJobs(data.jobs);
        } else {
          setError(data.error || 'Something went wrong.');
        }
      } catch (err) {
        console.error('Error occurred while fetching data:', err);
        setError('Server error. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [keywords, location]);

  return (
    <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'azure', 
      }}>
      <Container maxWidth="sm">
        <Card sx={{ p: 4, textAlign: 'center', boxShadow: 3, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Job Results
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={2}>
            Showing jobs for  &quot;{keywords}&quot; in &quot;{location}&quot;
          </Typography>

          {loading ? (
            <CircularProgress sx={{ my: 3 }} />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <JobList jobs={jobs} />
          )}
        </Card>
      </Container>
    </Box>
  );
};

export default JobsPage;
