// src/components/CartDrawer.tsx (ปรับปรุงให้ทำงานได้ดีขึ้น)
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/Contexts/CartContext';


const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // เพิ่ม console.log เพื่อตรวจสอบ
  // console.log('CartDrawer rendered, isCartOpen:', isCartOpen);
  // console.log('Cart items:', items);

  return (
    <AnimatePresence >
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
            role="drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#0A1F3E]">
                ตะกร้าสินค้า
                <span className="text-sm text-gray-500 ml-2">({items.length} รายการ)</span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500 text-lg">ตะกร้าของคุณว่างเปล่า</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#F3C550] px-6 py-2 rounded-full text-[#0A1F3E] font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    เริ่มช้อปปิ้ง
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-lg flex items-center justify-center">
                        <span className="text-3xl">✨</span>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-[#D4AF37] font-bold mt-1">
                          {formatPrice(item.price)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-start p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>รวมทั้งหมด</span>
                  <span className="text-[#D4AF37]">{formatPrice(getTotalPrice())}</span>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      alert(`ยอดรวมทั้งสิ้น ${formatPrice(getTotalPrice())}\nกำลังดำเนินการชำระเงิน...`);
                      setIsCartOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F3C550] py-3 rounded-xl text-lg font-bold text-[#0A1F3E] shadow-md hover:shadow-lg transition-all"
                  >
                    ดำเนินการชำระเงิน
                  </button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full border-2 border-[#D4AF37] py-3 rounded-xl font-medium text-[#0A1F3E] hover:bg-[#D4AF37] hover:text-white transition-all"
                  >
                    ล้างตะกร้า
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;