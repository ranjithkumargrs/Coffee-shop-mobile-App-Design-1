function CategoryList({ categories, active, onChange }) {
  return (
    <div className="-mx-6 mb-5 flex gap-2.5 overflow-x-auto px-6 pb-[3px] [scrollbar-width:none]" role="tablist" aria-label="Coffee categories">
      {categories.map((category) => (
        <button
          className={`min-h-9 shrink-0 rounded-[10px] px-[14px] text-sm font-medium ${category === active ? 'bg-coffee font-semibold text-white' : 'bg-neutral-100 text-neutral-800'}`}
          key={category}
          onClick={() => onChange(category)}
          role="tab"
          aria-selected={category === active}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryList
