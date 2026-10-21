import { ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <header>
      <div>
        <p className="mb-1 text-[13px] text-neutral-400">Location</p>
        <button className="flex items-center gap-1 text-[15px] font-semibold text-white">
          Bilzen, Tanjungbalai <ChevronDown size={17} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
