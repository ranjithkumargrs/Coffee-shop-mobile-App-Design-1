import { ArrowLeft, Heart } from 'lucide-react'
import { useState } from 'react'

function Details({ coffee, isFavorite, onBack, onFavorite, onBuy }) {
  const [size, setSize] = useState('M')
  const [expanded, setExpanded] = useState(false)
  const sizePrice = size === 'S' ? coffee.price - 0.5 : size === 'L' ? coffee.price + 0.75 : coffee.price

  return (
    <section className="min-h-dvh px-6 pb-36 pt-[72px]">
      <header className="mb-[19px] flex h-12 items-center justify-between">
        <button className="grid size-9 place-items-center text-neutral-800" onClick={onBack} aria-label="Go back"><ArrowLeft size={22} /></button>
        <h1 className="m-0 text-[19px] font-bold text-neutral-800">Detail</h1>
        <button className={`grid size-9 place-items-center ${isFavorite ? 'text-coffee' : 'text-neutral-800'}`} onClick={onFavorite} aria-label="Toggle favorite">
          <Heart size={22} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </header>
      <div className={`aspect-[1.48/1] w-full rounded-[21px] bg-[#30231d] bg-no-repeat ${coffee.imageClass}`} role="img" aria-label={coffee.name} />
      <img
        className="mt-[19px] block h-auto w-full"
        src="/images/detail-info.png"
        alt={`${coffee.name}, Ice/Hot, rated ${coffee.rating} out of 5`}
      />
      <section className="mt-[19px]">
        <h3 className="mb-[9px] text-lg font-bold">Description</h3>
        <p className="text-sm leading-relaxed text-neutral-400">
          {expanded ? coffee.description : `${coffee.description.slice(0, 106)}...`}
          {' '}
          <button className="font-bold text-coffee" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Read Less' : 'Read More'}</button>
        </p>
      </section>
      <section className="mt-[22px]">
        <h3 className="mb-[9px] text-lg font-bold">Size</h3>
        <div className="grid grid-cols-3 gap-2.5">
          {['S', 'M', 'L'].map((option) => (
            <button
              key={option}
              className={`min-h-[46px] rounded-[13px] border text-[13px] ${option === size ? 'border-coffee bg-[#fbf3ee] text-coffee' : 'border-neutral-200 bg-white text-neutral-800'}`}
              onClick={() => setSize(option)}
              aria-pressed={option === size}
            >
              {option}
            </button>
          ))}
        </div>
      </section>
      <footer className="fixed bottom-0 left-1/2 z-10 flex min-h-[102px] w-full max-w-[430px] -translate-x-1/2 items-center justify-between rounded-t-[23px] bg-white px-6 pb-[25px] pt-[17px] shadow-[0_-4px_20px_rgba(0,0,0,.03)]">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-neutral-400">Price</span>
          <strong className="text-xl text-coffee">$ {sizePrice.toFixed(2)}</strong>
        </div>
        <button className="min-h-[58px] w-[58%] rounded-[18px] bg-coffee font-bold text-white" onClick={() => onBuy(size)}>Buy Now</button>
      </footer>
    </section>
  )
}

export default Details
