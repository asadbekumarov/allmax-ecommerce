import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-lg bg-[#141414] border border-[#262626] px-3 py-1.5 focus-within:border-[#e30613] focus-within:ring-1 focus-within:ring-[#e30613] transition-all shadow-inner">
      <Search className="w-3.5 h-3.5 text-zinc-400" />
      <input
        id="search"
        placeholder="Qidiruv (masalan, polo, kurtka)..."
        className="text-xs outline-hidden bg-transparent text-white placeholder:text-zinc-500 w-44 lg:w-56"
      />
    </div>
  );
};

export default SearchBar;