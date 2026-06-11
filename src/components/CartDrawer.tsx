import { useState } from "react"
import { useCart } from "@/context/CartContext"
import Icon from "@/components/ui/icon"

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)

  const total = items.reduce((sum, i) => sum + i.priceNum, 0)
  const formatted = total.toLocaleString("ru-RU") + " ₽"

  const handleOrder = () => {
    setOrdered(true)
    clearCart()
    setTimeout(() => {
      setOrdered(false)
      onClose()
    }, 2500)
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#111] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">Корзина</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors cursor-pointer">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {ordered ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-5xl">🎉</div>
              <p className="text-white font-semibold text-lg">Заказ оформлен.</p>
              <p className="text-white/60 text-sm">Спасибо за покупку!</p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <Icon name="ShoppingCart" size={48} className="text-white/20" />
              <p className="text-white/50">Ваша корзина пуста</p>
              <button
                onClick={onClose}
                className="text-orange-400 text-sm hover:underline cursor-pointer"
              >
                Вернуться в каталог
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Ваши товары:</p>
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-3 border-b border-white/8">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-white/5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{item.name}</p>
                    <p className="text-orange-400 text-sm">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white/30 hover:text-red-400 transition-colors cursor-pointer shrink-0"
                    title="Удалить"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!ordered && items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/60 text-sm">Итого:</span>
              <span className="text-white font-semibold text-lg">{formatted}</span>
            </div>
            <button
              onClick={handleOrder}
              className="w-full py-3 rounded-full bg-orange-700 hover:bg-orange-600 text-white font-medium text-sm transition-all duration-200 cursor-pointer"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  )
}
