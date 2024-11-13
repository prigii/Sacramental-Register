import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center items-center my-8">
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-center text-2xl font-semibold text-brown-800">Search Members</h2>
        
        <div className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or outstation..."
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
