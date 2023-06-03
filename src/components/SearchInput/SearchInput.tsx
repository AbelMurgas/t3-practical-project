import { useState } from "react";

interface EntityData {
  caption: string;
  // Add more properties as needed
}

const SearchInput = (): JSX.Element => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (): Promise<void> => {
    try {
      const response = await fetch(
        `/api/information?name=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const data = await response.json() as EntityData;
        // Process the data
        console.log(data);
      } else {
        const errorData = await response.json() as { message: string };
        // Handle the error
        console.error(errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleClick = (): void => {
    handleSearch().catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="..."
        value={query}
        onChange={handleChange}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7926ed]"
      />
      <button
        onClick={handleClick}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition duration-300 ease-in-out hover:bg-white/20"
      >
        Search Entity
      </button>
    </div>
  );
};

export default SearchInput;