import { Search, SlidersHorizontal } from 'lucide-react'

function SearchBar({ value, onChange, onFilter }) {
  return (
    <div className="mt-6 flex gap-[15px]">
      <label className="flex h-[54px] min-w-0 flex-1 items-center gap-3 rounded-2xl bg-[#303030] px-[17px] text-white">
        <Search size={22} aria-hidden="true" />
        <input
          className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-neutral-400"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search coffee"
          aria-label="Search coffee"
        />
      </label>
      <button className="grid size-[54px] shrink-0 place-items-center rounded-2xl bg-coffee text-white" aria-label="Filter coffee" onClick={onFilter}>
        <SlidersHorizontal size={21} />
      </button>
    </div>
  )
}

export default SearchBar
