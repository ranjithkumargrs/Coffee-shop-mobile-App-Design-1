import { Heart } from 'lucide-react'
import CoffeeCard from '../components/CoffeeCard.jsx'

function Favorites({ favorites, onOpen, onAdd, onExplore }) {
  return (
    <section className="min-h-dvh px-6 pb-28 pt-[65px]">
      <header className="mb-[23px]">
        <span className="text-[10px] font-bold tracking-[1.5px] text-coffee">YOUR PICKS</span>
        <h1 className="m-0 mt-1 text-[29px] font-bold tracking-tight">Favorites</h1>
      </header>
      {favorites.length ? (
        <div className="grid grid-cols-2 gap-4">
          {favorites.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onOpen={() => onOpen(coffee)}
              onAdd={() => onAdd(coffee)}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[55vh] flex-col items-center justify-center p-5 text-center">
          <span className="mb-3 grid size-[60px] place-items-center rounded-[20px] bg-[#f2e5dc] text-coffee"><Heart size={31} /></span>
          <h2 className="mb-1 text-xl font-bold">No favorites yet</h2>
          <p className="mb-4 max-w-[280px] text-sm leading-relaxed text-neutral-400">Tap the heart on a coffee you love and it will be waiting here.</p>
          <button className="min-h-[46px] rounded-[14px] bg-coffee px-5 text-sm font-bold text-white" onClick={onExplore}>Explore coffee</button>
        </div>
      )}
    </section>
  )
}

export default Favorites
