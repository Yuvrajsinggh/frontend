import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform the user search using the searchQuery.
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <input
        className="w-48 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search by username"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <button
        // className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        className='border border-white text-white bg-transparent hover:bg-white hover:text-red-500 px-4 py-2 rounded-full transform hover:scale-95 transition duration-80 focus:outline-none'
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
