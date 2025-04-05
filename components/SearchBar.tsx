'use client';

import React from 'react';

type SearchBarProps = {
  keywords: string;
  location: string;
  onKeywordsChange: (val: string) => void;
  onLocationChange: (val: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ keywords, location, onKeywordsChange, onLocationChange, onSubmit }: SearchBarProps) => {
  return (
    <form onSubmit={onSubmit} className="mb-6 space-y-2">
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => onKeywordsChange(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

