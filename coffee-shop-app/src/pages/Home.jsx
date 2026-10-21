import { useMemo, useState } from 'react'
import { coffeeCategories } from '../data/coffeeData.js'
import CategoryList from '../components/CategoryList.jsx'
import CoffeeCard from '../components/CoffeeCard.jsx'
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/SearchBar.jsx'

function Home({ coffees, onOpen, onAdd }) {
  const [activeCategory, setActiveCategory] = useState(coffeeCategories[0])
  const [search, setSearch] = useState('')
  const filteredCoffee = useMemo(
    () =>
      coffees.filter((coffee) => {
        const matchesCategory = activeCategory === 'All Coffee' || coffee.category === activeCategory
        const matchesSearch = `${coffee.name} ${coffee.subtitle}`.toLowerCase().includes(search.toLowerCase())
        return matchesCategory && matchesSearch
      }),
    [activeCategory, coffees, search],
  )

  return (
    <div className="min-h-dvh pb-[110px]">
      <section className="relative h-[315px] bg-gradient-to-br from-neutral-800 to-neutral-900 px-6 pt-[58px]">
        <Navbar />
        <SearchBar
          value={search}
          onChange={setSearch}
          onFilter={() => setActiveCategory((category) => category === 'Latte' ? 'All Coffee' : 'Latte')}
        />
        <button className="absolute -bottom-[75px] left-6 right-6 block overflow-hidden rounded-[20px] bg-[#98775d] shadow-lg" aria-label="Promotion: Buy one get one free">
          <img className="block h-auto w-full" src="/images/Banner.png" alt="Promo: Buy one get one FREE" />
        </button>
      </section>
      <section className="px-6 pb-5 pt-20">
        <CategoryList categories={coffeeCategories} active={activeCategory} onChange={setActiveCategory} />
        {filteredCoffee.length ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredCoffee.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onOpen={() => onOpen(coffee)}
                onAdd={() => onAdd(coffee)}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[260px] flex-col items-center justify-center p-5 text-center text-neutral-400">
            <span className="mb-2 text-3xl">☕</span>
            <p>No coffee found. Try another search.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
