import { ArrowLeft, ChevronDown, ChevronRight, MapPin, NotebookPen, Percent, Wallet } from 'lucide-react'
import { useMemo, useState } from 'react'
import QuantitySelector from '../components/QuantitySelector.jsx'

function Cart({ items, onBack, onQuantityChange, onOrder }) {
  const [fulfillment, setFulfillment] = useState('Deliver')
  const [discount, setDiscount] = useState(true)
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )
  const delivery = fulfillment === 'Deliver' && items.length ? 1 : 0
  const total = subtotal + delivery

  return (
    <section className="min-h-dvh px-6 pb-48 pt-[58px]">
      <header className="mb-5 flex h-12 items-center justify-between">
        <button className="grid size-9 place-items-center text-neutral-800" onClick={onBack} aria-label="Go back"><ArrowLeft size={22} /></button>
        <h1 className="m-0 text-[19px] font-bold">Order</h1>
        <span className="w-9" />
      </header>
      <div className="mb-[25px] flex h-[45px] rounded-[15px] bg-neutral-200 p-1">
        {['Deliver', 'Pick Up'].map((option) => (
          <button key={option} className={`flex-1 rounded-xl text-[15px] ${fulfillment === option ? 'bg-coffee font-bold text-white' : 'text-neutral-800'}`} onClick={() => setFulfillment(option)}>{option}</button>
        ))}
      </div>
      <section>
        <h2 className="mb-[15px] text-lg font-bold">{fulfillment === 'Deliver' ? 'Delivery Address' : 'Pickup Location'}</h2>
        <strong className="mb-1 block text-base text-neutral-800">{fulfillment === 'Deliver' ? 'Jl. Kpg Sutoyo' : 'Coffee Corner - Downtown'}</strong>
        <p className="text-[13px] text-neutral-400">{fulfillment === 'Deliver' ? 'Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.' : 'Open today · 8:00 AM - 10:00 PM'}</p>
        <div className="my-[14px] flex gap-2">
          <button className="flex min-h-[31px] items-center gap-[5px] rounded-full border border-neutral-400 px-[11px] text-xs text-neutral-700"><MapPin size={15} /> Edit Address</button>
          <button className="flex min-h-[31px] items-center gap-[5px] rounded-full border border-neutral-400 px-[11px] text-xs text-neutral-700"><NotebookPen size={15} /> Add Note</button>
        </div>
      </section>
      <div className="border-t border-neutral-200">
        {items.length ? items.map((item) => (
          <article className="flex min-h-24 items-center gap-3" key={`${item.id}-${item.size}`}>
            <div className={`size-[58px] shrink-0 rounded-[13px] bg-[#30231d] bg-no-repeat ${item.imageClass}`} />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <strong className="overflow-hidden text-ellipsis whitespace-nowrap text-[15px]">{item.name}</strong>
              <span className="text-[13px] text-neutral-400">{item.subtitle} · {item.size}</span>
            </div>
            <QuantitySelector
              compact
              quantity={item.quantity}
              onDecrease={() => onQuantityChange(item.id, item.size, -1)}
              onIncrease={() => onQuantityChange(item.id, item.size, 1)}
            />
          </article>
        )) : (
          <div className="flex min-h-[205px] flex-col items-center justify-center px-2.5 py-4 text-center">
            <span className="mb-3 grid size-[60px] place-items-center rounded-[20px] bg-[#f2e5dc] text-coffee"><Wallet size={30} /></span>
            <h2 className="mb-1 text-[19px] font-bold">Your cart is empty</h2>
            <p className="mb-3 max-w-[280px] text-sm leading-relaxed text-neutral-400">Find your new favorite coffee on the home screen.</p>
            <button className="py-1 text-[13px] font-bold text-coffee" onClick={onBack}>Explore coffee</button>
          </div>
        )}
      </div>
      {!!items.length && (
        <>
          <button className="my-[9px] flex min-h-[59px] w-full items-center gap-3 rounded-[19px] border border-neutral-200 bg-white px-4 text-left" onClick={() => setDiscount((value) => !value)}>
            <Percent size={21} className="text-coffee" />
            <strong className="flex-1 text-sm text-neutral-700">{discount ? '1 Discount is Applied' : 'Apply a discount'}</strong>
            <ChevronRight size={21} className="text-neutral-700" />
          </button>
          <section>
            <h2 className="mb-[14px] text-lg font-bold">Payment Summary</h2>
            <div className="mt-[9px] flex justify-between text-sm text-neutral-700"><span>Price</span><strong>$ {subtotal.toFixed(2)}</strong></div>
            <div className="mt-[9px] flex justify-between text-sm text-neutral-700"><span>Delivery Fee</span><strong>{delivery ? '$ 1.00' : 'Free'}</strong></div>
          </section>
          <footer className="fixed bottom-0 left-1/2 z-10 w-full max-w-[430px] -translate-x-1/2 rounded-t-[24px] bg-white px-6 pb-[26px] pt-[15px] shadow-[0_-5px_18px_rgba(0,0,0,.04)]">
            <div className="flex min-h-12 items-center gap-3 text-coffee">
              <Wallet size={23} />
              <div className="flex flex-1 flex-col gap-0.5"><strong className="text-[15px] text-neutral-800">Cash/Wallet</strong><span className="text-[13px] font-bold">$ {total.toFixed(2)}</span></div>
              <ChevronDown size={20} className="text-neutral-700" />
            </div>
            <button className="mt-[9px] min-h-[58px] w-full rounded-[18px] bg-coffee font-bold text-white" onClick={onOrder}>Order</button>
          </footer>
        </>
      )}
    </section>
  )
}

export default Cart
