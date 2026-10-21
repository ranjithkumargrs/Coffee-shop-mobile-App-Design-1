import { Bell, Heart, House, ShoppingBag } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', Icon: House },
  { id: 'favorites', label: 'Favorites', Icon: Heart },
  { id: 'cart', label: 'Cart', Icon: ShoppingBag },
  { id: 'profile', label: 'Profile', Icon: Bell },
]

function BottomNavigation({ active, cartCount, onChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-30 flex h-[88px] w-full max-w-[430px] -translate-x-1/2 items-center justify-around rounded-t-[26px] bg-white/95 px-[14px] pb-4 pt-2 shadow-[0_-6px_24px_rgba(27,26,25,.04)]" aria-label="Main navigation">
      {tabs.map(({ id, label, Icon }) => (
        <button
          className={`relative grid size-12 place-items-center ${active === id ? 'text-coffee' : 'text-neutral-400'}`}
          key={id}
          onClick={() => onChange(id)}
          aria-label={label}
          aria-current={active === id ? 'page' : undefined}
        >
          <span className="relative grid min-h-7 place-items-center">
            <Icon size={27} strokeWidth={active === id ? 2.4 : 1.8} fill={active === id && id === 'home' ? 'currentColor' : 'none'} />
            {id === 'cart' && cartCount > 0 && <span className="absolute -right-2 -top-1 grid min-w-4 place-items-center rounded-full bg-coffee px-1 text-[9px] text-white">{cartCount}</span>}
            {active === id && <span className="absolute -bottom-[6px] h-1 w-3 rounded bg-coffee" />}
          </span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNavigation
