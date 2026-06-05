export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-semibold tracking-wide">🐾 PawStyle</div>
        <nav className="hidden md:flex gap-8">
          <a href="#catalog" className="text-white hover:text-neutral-300 transition-colors duration-300 text-sm">Каталог</a>
          <a href="#about" className="text-white hover:text-neutral-300 transition-colors duration-300 text-sm">О нас</a>
          <a href="#delivery" className="text-white hover:text-neutral-300 transition-colors duration-300 text-sm">Доставка</a>
          <a href="#contacts" className="text-white hover:text-neutral-300 transition-colors duration-300 text-sm">Контакты</a>
        </nav>
        <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all duration-200 cursor-pointer">
          🛒 Корзина (0)
        </button>
      </div>
    </header>
  )
}