import { Minus, Plus } from 'lucide-react'

function QuantitySelector({ quantity, onDecrease, onIncrease, compact = false }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-[7px]' : 'gap-[15px]'}`}>
      <button className={`grid place-items-center rounded-full border border-neutral-200 bg-white text-neutral-700 ${compact ? 'size-[26px]' : 'size-8'}`} onClick={onDecrease} aria-label="Decrease quantity"><Minus size={16} /></button>
      <span className="min-w-[14px] text-center font-bold text-neutral-800">{quantity}</span>
      <button className={`grid place-items-center rounded-full border border-neutral-200 bg-white text-neutral-700 ${compact ? 'size-[26px]' : 'size-8'}`} onClick={onIncrease} aria-label="Increase quantity"><Plus size={17} /></button>
    </div>
  )
}

export default QuantitySelector
