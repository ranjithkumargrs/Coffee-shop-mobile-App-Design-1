import { BatteryFull, Signal, Wifi } from 'lucide-react'
import { useMemo, useState } from 'react'
import BottomNavigation from './components/BottomNavigation.jsx'
import Cart from './pages/Cart.jsx'
import Details from './pages/Details.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import { coffeeData } from './data/coffeeData.js'

function App() {
  const [screen, setScreen] = useState('welcome')
  const [activeTab, setActiveTab] = useState('home')
  const [selectedCoffee, setSelectedCoffee] = useState(coffeeData[0])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  function addToCart(coffee, size = 'M') {
    const price = size === 'S' ? coffee.price - 0.5 : size === 'L' ? coffee.price + 0.75 : coffee.price
    setCartItems((items) => {
      const existing = items.find((item) => item.id === coffee.id && item.size === size)
      if (existing) {
        return items.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { ...coffee, price, size, quantity: 1 }]
    })
  }

  function updateQuantity(id, size, amount) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function toggleFavorite(coffee) {
    setFavorites((items) =>
      items.some((item) => item.id === coffee.id)
        ? items.filter((item) => item.id !== coffee.id)
        : [...items, coffee],
    )
  }

  function showTab(tab) {
    setActiveTab(tab)
    setScreen(tab)
  }

  function openDetails(coffee) {
    setSelectedCoffee(coffee)
    setScreen('details')
  }

  function renderScreen() {
    if (screen === 'welcome') {
      return (
        <section className="relative min-h-dvh bg-black text-center text-white">
          <div className="absolute inset-x-0 top-0 h-[64%] bg-[url('/images/Image%20Onboarding.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black" />
          </div>
          <div className="absolute inset-x-6 bottom-[max(44px,calc(env(safe-area-inset-bottom)+28px))]">
            <p className="mb-2 text-[10px] font-bold tracking-[2px] text-coffee">YOUR DAILY CUP OF HAPPINESS</p>
            <h1 className="mx-auto mb-4 max-w-sm text-[clamp(29px,8vw,37px)] font-extrabold leading-[1.16] tracking-tight">
              Fall in Love with Coffee in Blissful Delight!
            </h1>
            <p className="mx-auto mb-7 max-w-sm text-[15px] leading-relaxed text-neutral-400">
              Welcome to our cozy coffee corner, where every cup is a delight for you.
            </p>
            <button
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-[18px] bg-coffee text-[17px] font-bold text-white transition active:scale-[.985] active:bg-coffee-dark"
              onClick={() => showTab('home')}
            >
              Get Started <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )
    }

    if (screen === 'details') {
      return (
        <Details
          coffee={selectedCoffee}
          isFavorite={favorites.some((item) => item.id === selectedCoffee.id)}
          onBack={() => setScreen('home')}
          onFavorite={() => toggleFavorite(selectedCoffee)}
          onBuy={(size) => {
            addToCart(selectedCoffee, size)
            showTab('cart')
          }}
        />
      )
    }

    if (screen === 'cart') {
      return (
        <Cart
          items={cartItems}
          onBack={() => showTab('home')}
          onQuantityChange={updateQuantity}
          onOrder={() => setScreen('delivery')}
        />
      )
    }

    if (screen === 'delivery') {
      return (
        <section className="min-h-dvh bg-white">
          <div className="relative">
            <img
              className="block h-auto w-full"
              src="/images/delivery-map.png"
              alt="Delivery map showing the route to Jl. Kpg Sutoyo"
            />
            <button
              className="absolute left-[6.4%] top-[13.9%] size-[12%] bg-transparent"
              onClick={() => setScreen('cart')}
              aria-label="Back to order"
            />
          </div>
          <img
            className="block h-auto w-full"
            src="/images/Detail%20Driver.png"
            alt="10 minutes left. Your order is on its way with your personal courier."
          />
        </section>
      )
    }

    if (screen === 'favorites') {
      return (
        <Favorites
          favorites={favorites}
          onOpen={openDetails}
          onFavorite={toggleFavorite}
          onAdd={(coffee) => addToCart(coffee)}
          onExplore={() => showTab('home')}
        />
      )
    }

    if (screen === 'profile') return <Profile />

    return (
      <Home
        coffees={coffeeData}
        onOpen={openDetails}
        onAdd={addToCart}
      />
    )
  }

  const showNavigation = !['welcome', 'details', 'cart', 'delivery'].includes(screen)
  const isWelcome = screen === 'welcome'

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-[#f8f8f8] font-sans antialiased shadow-[0_0_50px_rgba(0,0,0,.08)]">
      {screen !== 'delivery' && <div className={`absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-[26px] text-[15px] font-bold ${isWelcome || screen === 'home' ? 'text-white' : 'text-neutral-800'}`} aria-hidden="true">
        <span>9:41</span>
        <span className="flex items-center gap-1"><Signal size={17} fill="currentColor" /><Wifi size={17} /><BatteryFull size={21} /></span>
      </div>}
      {renderScreen()}
      {showNavigation && <BottomNavigation active={activeTab} cartCount={cartCount} onChange={showTab} />}
      <div className={`fixed bottom-[max(7px,env(safe-area-inset-bottom))] left-1/2 z-40 h-1 w-[108px] -translate-x-1/2 rounded-full ${isWelcome ? 'bg-white' : 'bg-neutral-900'}`} aria-hidden="true" />
    </main>
  )
}

export default App
