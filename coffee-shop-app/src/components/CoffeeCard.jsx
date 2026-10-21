import { Plus, Star } from 'lucide-react'

function CoffeeCard({ coffee, onOpen, onAdd }) {
  return (
    <article className="min-w-0 rounded-[21px] bg-white p-2 shadow-[0_5px_20px_rgba(40,30,23,.03)]">
      <button
        className={`relative block aspect-[1.08/1] w-full overflow-hidden rounded-[15px] bg-[#30231d] bg-no-repeat ${coffee.imageClass}`}
        onClick={onOpen}
        aria-label={`View ${coffee.name}`}
      >
        {coffee.id === 'caffe-mocha' && (
          <span className="absolute right-0 top-0 flex h-[27px] min-w-[54px] items-center justify-center gap-1 rounded-bl-[13px] rounded-tr-[15px] bg-black/65 px-[7px] text-[11px] font-bold text-white">
            <Star size={14} fill="currentColor" className="text-amber-400" /> {coffee.rating}
          </span>
        )}
      </button>
      <div className="px-0.5 pb-0.5 pt-[9px] text-left">
        <button className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-[15px] font-bold text-neutral-800" onClick={onOpen}>{coffee.name}</button>
        <p className="mb-2 mt-[3px] text-[13px] text-neutral-400">{coffee.subtitle}</p>
        <div className="flex min-h-[34px] items-center justify-between text-neutral-950">
          <strong className="text-base font-extrabold">$ {coffee.price.toFixed(2)}</strong>
          <button className="grid size-[34px] place-items-center rounded-xl bg-coffee text-white" onClick={onAdd} aria-label={`Add ${coffee.name} to cart`}>
            <Plus size={20} strokeWidth={2.7} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CoffeeCard
