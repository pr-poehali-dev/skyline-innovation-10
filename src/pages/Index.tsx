import { useState } from "react"
import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import CartDrawer from "@/components/CartDrawer"
import Icon from "@/components/ui/icon"
import { useCart } from "@/context/CartContext"

const catalog = [
  {
    category: "Зимняя одежда",
    items: [
      { id: 1, name: "Свитер с оленем", desc: "Для собак от 3 до 10 кг, флис + хлопок", price: "1 290 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/f27fff30-b4b5-4fbc-a9dd-0daab77a1d2e.jpg" },
      { id: 2, name: "Комбинезон непромокаемый", desc: "Защита от дождя и слякоти", price: "2 190 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/fb4a7384-0410-43e9-a64b-25445edda538.jpg" },
      { id: 3, name: "Пижама для кошек", desc: "Мягкий флис, лапки открыты", price: "1 090 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/f7b297e3-17cb-4a92-91ae-34d615600a4a.jpg" },
    ],
  },
  {
    category: "Летняя одежда",
    items: [
      { id: 4, name: "Футболка «Суперпёс»", desc: "100% хлопок", price: "690 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/f27fff30-b4b5-4fbc-a9dd-0daab77a1d2e.jpg" },
      { id: 5, name: "Лёгкая майка с рыбкой", desc: "Хлопок, для жары", price: "590 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/25743f9d-bca4-40bd-8f74-d2c8f6684f48.jpg" },
    ],
  },
  {
    category: "Шапочки",
    items: [
      { id: 6, name: "Шапка-ушанка для собак", desc: "Флис, завязки под подбородок", price: "450 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/80ac268f-a42f-47c5-8609-1a5333808f81.jpg" },
      { id: 7, name: "Бандана летняя", desc: "Хлопок, три расцветки", price: "350 ₽", sizes: ["универсальная"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/7a942f29-1a0a-4792-a2e6-6a7c256e3f7c.jpg" },
    ],
  },
  {
    category: "Обувь",
    items: [
      { id: 8, name: "Ботиночки зимние (4 шт)", desc: "Не скользят, греют лапы", price: "1 490 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/7bb0e802-59d1-4129-8f00-33cce747de57.jpg" },
      { id: 9, name: "Резиновые ботиночки для слякоти (4 шт)", desc: "Защита от воды и грязи", price: "990 ₽", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/8a95221e-7e56-4cc1-9a6b-7b2f6f41d9c5/files/f1699d2f-2123-4675-aa5a-3d8e8c3a0f85.jpg" },
    ],
  },
]

const sizeGuide = [
  { size: "XS", back: "20–25 см", chest: "30–35 см", breeds: "йорк, чихуахуа" },
  { size: "S", back: "26–32 см", chest: "36–42 см", breeds: "той-терьер, цвергшнауцер" },
  { size: "M", back: "33–40 см", chest: "43–52 см", breeds: "мопс, французский бульдог" },
  { size: "L", back: "41–50 см", chest: "53–65 см", breeds: "корги, бигль" },
]

const Index = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { addItem, toast } = useCart()

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true)
  }

  const priceToNum = (price: string) => parseInt(price.replace(/\D/g, ""))

  return (
    <div className="bg-[#0a0a0a] text-white">
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-orange-700 text-white text-sm px-5 py-3 rounded-full shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* HERO SECTION */}
      <div className="relative h-screen min-h-[600px]">
        <ShaderBackground>
          <Header onCartOpen={() => setCartOpen(true)} />
          <HeroContent />
          <PulsingCircle />
        </ShaderBackground>
      </div>

      {/* ADVANTAGES */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-900/40 flex items-center justify-center">
              <Icon name="Leaf" size={22} className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-white">Безопасные ткани</h3>
            <p className="text-sm text-white/60">Хлопок и флис, гипоаллергенно</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-900/40 flex items-center justify-center">
              <Icon name="Ruler" size={22} className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-white">Подбор по размеру</h3>
            <p className="text-sm text-white/60">Таблица для 15 пород</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-900/40 flex items-center justify-center">
              <Icon name="RotateCcw" size={22} className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-white">Примерка дома</h3>
            <p className="text-sm text-white/60">Возврат за 7 дней</p>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 text-center">Каталог</h2>
          <div className="flex flex-col gap-14">
            {catalog.map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-medium text-orange-400 mb-6 pb-2 border-b border-orange-500/20">{group.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((p) => (
                    <div key={p.id} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-orange-500/40 transition-all duration-300 group">
                      <div className="aspect-square overflow-hidden bg-white/5">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">{p.name}</h4>
                        <p className="text-xs text-white/50 mb-3">{p.desc}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {p.sizes.map((s) => (
                            <span key={s} className="text-xs px-2 py-0.5 rounded border border-white/20 text-white/60">{s}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-orange-400">{p.price}</span>
                          <button
                            onClick={() => addItem({ id: p.id, name: p.name, price: p.price, priceNum: priceToNum(p.price), img: p.img })}
                            className="px-4 py-2 rounded-full bg-orange-700/80 hover:bg-orange-600 text-white text-xs transition-all duration-200 cursor-pointer"
                          >
                            В корзину
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIZE GUIDE */}
      <section id="size-guide" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-10 text-center">Как выбрать размер?</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left px-5 py-3 text-white/60 font-normal">Размер</th>
                  <th className="text-left px-5 py-3 text-white/60 font-normal">Длина спины</th>
                  <th className="text-left px-5 py-3 text-white/60 font-normal">Обхват груди</th>
                  <th className="text-left px-5 py-3 text-white/60 font-normal">Подходит для</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-transparent" : "bg-white/3"}>
                    <td className="px-5 py-3 font-semibold text-orange-400">{row.size}</td>
                    <td className="px-5 py-3 text-white/80">{row.back}</td>
                    <td className="px-5 py-3 text-white/80">{row.chest}</td>
                    <td className="px-5 py-3 text-white/60">{row.breeds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-5 text-sm text-white/50">
            Не знаете размер?{" "}
            <a href="#contacts" className="text-orange-400 hover:underline">Поможем в чате</a>
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-6">🐕</div>
          <h2 className="text-3xl font-light text-white mb-4">
            Мы начали шить, потому что нашли на улице замёрзшего щенка
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Шьём в России с 2022 года. 4 200 довольных хвостов.
          </p>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-left">
            <p className="text-white/70 text-sm leading-relaxed">
              Меня зовут <span className="text-white font-medium">Василиса</span>. Сама люблю животных, у меня живёт пёс по кличке <span className="text-orange-400 font-medium">Рекс</span>. Идея продавать одежду для питомцев родилась, когда я заметила, как сложно найти удобные и недорогие вещи для своего любимца. На этом сайте вы можете посмотреть каталог, выбрать размер и связаться со мной.
            </p>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light text-white mb-6">Получите скидку 10% на первый заказ</h2>
          {subscribed ? (
            <div className="rounded-2xl bg-orange-500/15 border border-orange-500/40 px-6 py-6">
              <div className="text-3xl mb-3">🎉</div>
              <p className="text-white font-semibold text-lg mb-2">Ваш промокод на скидку 10%:</p>
              <div className="inline-block bg-orange-700/60 border border-orange-500/50 rounded-xl px-6 py-3 mb-3">
                <span className="text-2xl font-bold tracking-widest text-orange-200">PAW10</span>
              </div>
              <p className="text-white/60 text-sm">Скопируйте его и используйте при оформлении заказа.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="Ваш Gmail или email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 outline-none focus:border-orange-500/50 transition-colors"
                />
                <button onClick={handleSubscribe} className="px-6 py-3 rounded-full bg-orange-700 hover:bg-orange-600 text-white text-sm transition-all duration-200 cursor-pointer whitespace-nowrap">
                  Получить скидку 10%
                </button>
              </div>
              <p className="text-xs text-white/30">Введите email и нажмите на кнопку. Промокод придёт на почту.</p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-semibold mb-6">🐾 PawStyle</div>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={16} className="text-orange-400" />
                +7 (999) 123-45-67
              </a>
              <a href="mailto:hello@pawstyle.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Mail" size={16} className="text-orange-400" />
                hello@pawstyle.ru
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-orange-400" />
                Москва, ул. Собачья, 5 (примерка по записи)
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-white/50 uppercase tracking-widest mb-4">Мы в соцсетях</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Telegram", "WhatsApp", "Instagram", "VK"].map((s) => (
                <button key={s} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm hover:border-orange-500/50 hover:text-white transition-all cursor-pointer">
                  {s}
                </button>
              ))}
            </div>
            <button className="px-6 py-3 rounded-full bg-orange-700 hover:bg-orange-600 text-white text-sm transition-all duration-200 cursor-pointer">
              Задать вопрос в чат
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="delivery" className="py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>© 2026 PawStyle — одежда для собак и кошек</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Политика обработки данных</a>
            <a href="#" className="hover:text-white/70 transition-colors">Публичная оферта</a>
            <a href="#" className="hover:text-white/70 transition-colors">Возврат</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index