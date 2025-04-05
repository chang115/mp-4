import React from 'react';

type Job = {
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
};


const cleanText = (htmlString: string) => {
  return htmlString
    .replace(/<\/?[^>]+(>|$)/g, "") 
    .replace(/&nbsp;/g, " ") 
    .trim(); 
};

const JobItem = ({ job }: { job: Job }) => {
  return (
    <li className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="mt-2 text-sm text-gray-700">{cleanText(job.snippet)}</p>
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        View Job
      </a>
    </li>
  );
};

export default JobItem;
