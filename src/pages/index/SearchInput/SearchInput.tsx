import { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/information?name=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const data = await response.json();
        // Process the data
        console.log(data);
      } else {
        const errorData = await response.json();
        // Handle the error
        console.error(errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7926ed]"
      />
      <button
        onClick={handleSearch}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition duration-300 ease-in-out hover:bg-white/20"
      >
        Search Entity
      </button>
    </div>
  );
};

export default SearchInput;
