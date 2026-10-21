import { ChevronRight, Clock3, Headphones, MapPin, Settings, UserRound } from 'lucide-react'

function Profile() {
  return (
    <section className="min-h-dvh px-6 pb-28 pt-[65px]">
      <header className="mb-[23px]">
        <span className="text-[10px] font-bold tracking-[1.5px] text-coffee">YOUR COFFEE ACCOUNT</span>
        <h1 className="m-0 mt-1 text-[29px] font-bold tracking-tight">Profile</h1>
      </header>
      <div className="flex min-h-[84px] items-center gap-3 rounded-[20px] bg-white p-[14px]">
        <div className="grid size-[52px] place-items-center rounded-[18px] bg-[#f2e5dc] text-coffee"><UserRound size={32} /></div>
        <div className="flex-1">
          <h2 className="mb-[3px] text-base font-bold">Alex Morgan</h2>
          <p className="text-[13px] text-neutral-400">alex.morgan@email.com</p>
        </div>
        <button className="text-neutral-600" aria-label="Edit profile"><Settings size={20} /></button>
      </div>
      <div className="mt-5 overflow-hidden rounded-[19px] bg-white">
        {[
          { label: 'My orders', Icon: Clock3 },
          { label: 'Address book', Icon: MapPin },
          { label: 'Help & support', Icon: Headphones },
        ].map(({ label, Icon }) => (
          <button className="flex min-h-[59px] w-full items-center justify-between border-b border-neutral-100 px-[15px] text-neutral-400 last:border-0" key={label}>
            <span className="flex items-center gap-[11px] text-coffee"><Icon size={19} /><strong className="text-sm text-neutral-700">{label}</strong></span>
            <ChevronRight size={19} />
          </button>
        ))}
      </div>
      <div className="mt-[22px] flex items-center gap-3 rounded-[17px] bg-[#f2e5dc] p-4">
        <span className="text-[27px]">☕</span>
        <div><strong className="text-sm text-[#3c332e]">Good coffee, good mood.</strong><p className="mt-[3px] text-xs text-[#88786e]">Your next favorite is just a sip away.</p></div>
      </div>
    </section>
  )
}

export default Profile
