import React, { useState, useEffect } from 'react';
import { createCartWithCustomAttributes } from '../lib/shopify_client';

const PriceCalculator = ({ variantId }: { variantId: string }) => {
  // Dimensions in cm
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(5);
  
  const [quantity, setQuantity] = useState(500);
  const [material, setMaterial] = useState('white_kraft'); // white_kraft, kraft, black
  const [finish, setFinish] = useState('matte'); // matte, glossy, foil
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  // Material data for pricing and 3D preview
  const materials: Record<string, { label: string, color: string, priceFactor: number }> = {
    white_kraft: { label: 'White Kraft Paper', color: '#ffffff', priceFactor: 0.2 },
    kraft: { label: 'Natural Kraft Paper', color: '#e5d1b5', priceFactor: 0 },
    black: { label: 'Premium Black Board', color: '#1a1a1a', priceFactor: 0.5 },
  };

  const calculatePrice = () => {
    // Basic volume-based pricing logic
    let basePrice = 0.45; // Base price per box
    
    // Add price based on box surface area (roughly estimated)
    const surfaceArea = 2 * (length * width + length * height + width * height);
    basePrice += (surfaceArea / 100) * 0.05;
    
    // Add material and finish factors
    basePrice += materials[material].priceFactor;
    if (finish === 'foil') basePrice += 0.4;
    if (finish === 'glossy') basePrice += 0.15;

    // Volume discount
    let discount = 1.0;
    if (quantity >= 500) discount = 0.9;
    if (quantity >= 1000) discount = 0.8;
    if (quantity >= 5000) discount = 0.65;

    return (basePrice * quantity * discount).toFixed(2);
  };

  useEffect(() => {
    setTotalPrice(Number(calculatePrice()));
  }, [length, width, height, quantity, material, finish]);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      const attributes = [
        { key: 'Length', value: `${length} cm` },
        { key: 'Width', value: `${width} cm` },
        { key: 'Height', value: `${height} cm` },
        { key: 'Material', value: materials[material].label },
        { key: 'Finish', value: finish },
        { key: 'Estimated Total', value: `$${totalPrice}` }
      ];
      
      const response = await createCartWithCustomAttributes(variantId, quantity, attributes);
      
      if (response.data?.cartCreate?.cart?.checkoutUrl) {
        window.location.href = response.data.cartCreate.cart.checkoutUrl;
      } else {
        alert('Failed to create cart. Please check your Shopify connection.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('An error occurred. See console for details.');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Configurator */}
      <div className="w-full space-y-6">
        <div className="p-10 md:p-16 bg-white shadow-2xl rounded-[3rem] border border-gray-100">
          <h3 className="text-3xl font-black mb-10 text-gray-900 border-b pb-6 uppercase tracking-tighter">Instant Price Calculator</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Length (cm)</label>
              <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Width (cm)</label>
              <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold mb-3 uppercase tracking-widest text-xs text-gray-400">Material Selection</label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black appearance-none font-bold">
                {Object.entries(materials).map(([key, value]) => (
                  <option key={key} value={key}>{value.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 uppercase tracking-widest text-xs text-gray-400">Surface Finish</label>
              <div className="grid grid-cols-3 gap-2">
                {['matte', 'glossy', 'foil'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFinish(f)}
                    className={`py-3 text-[10px] font-black uppercase tracking-widest rounded-xl border transition-all ${finish === f ? 'bg-black border-black text-white' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-black'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-sm font-bold mb-3 uppercase tracking-widest text-xs text-gray-400">Order Quantity</label>
            <div className="relative">
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none font-bold text-xl"
              />
              <span className="absolute right-6 top-4 text-gray-400 font-black uppercase tracking-widest text-[10px]">units</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 font-bold uppercase tracking-widest">MOQ: 100 units. Bulk discounts applied automatically at 500, 1000, 5000 units.</p>
          </div>

          <div className="mt-12 pt-10 border-t border-dashed">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Estimated Investment</p>
                <p className="text-sm font-bold text-gray-400">(${ (totalPrice/quantity).toFixed(2) } per unit factory direct)</p>
              </div>
              <p className="text-5xl font-black text-black tracking-tighter">${totalPrice.toLocaleString()}</p>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-6 rounded-full font-black text-xl shadow-2xl transform active:scale-[0.98] transition-all uppercase tracking-widest ${isAdding ? 'bg-gray-200 cursor-not-allowed text-gray-400' : 'bg-black hover:bg-gray-800 text-white'}`}
            >
              {isAdding ? 'Connecting...' : 'Secure Order via Shopify'}
            </button>
            <div className="mt-6 flex items-center justify-center space-x-4 opacity-30">
               <span className="text-[8px] font-black uppercase tracking-[0.3em]">SSL SECURE</span>
               <span className="text-[8px] font-black uppercase tracking-[0.3em]">SHOPIFY API</span>
               <span className="text-[8px] font-black uppercase tracking-[0.3em]">GLOBAL SHIPPING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
