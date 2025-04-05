import React from 'react';
import JobItem from './JobItem';

type Job = {
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
};

type JobListProps = {
  jobs: Job[];
};

const JobList = ({ jobs }: JobListProps) => {
  if (!jobs.length) return <p className="text-gray-500 text-center">No jobs found.</p>;

  return (
    <ul className="space-y-4">
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </ul>
  );
};

export default JobList;
