import React, { useState, useEffect } from 'react';
import ThreeBoxViewer from './ThreeBoxViewer';
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
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto p-6">
      {/* Left: 3D Preview */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">3D Design Preview</h2>
        <ThreeBoxViewer 
          width={length} 
          height={height} 
          depth={width} 
          color={materials[material].color} 
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p>Rotate the box to see all angles. Dimensions update the 3D model in real-time.</p>
        </div>
      </div>

      {/* Right: Configurator */}
      <div className="w-full lg:w-[450px] space-y-6">
        <div className="p-6 bg-white shadow-xl rounded-xl border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4">Configure Your Box</h3>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Length (cm)</label>
              <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Width (cm)</label>
              <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Material</label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full p-2.5 border rounded-lg appearance-none bg-white">
                {Object.entries(materials).map(([key, value]) => (
                  <option key={key} value={key}>{value.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Finish</label>
              <div className="grid grid-cols-3 gap-2">
                {['matte', 'glossy', 'foil'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFinish(f)}
                    className={`py-2 text-sm rounded-lg border transition-all ${finish === f ? 'bg-blue-600 border-blue-600 text-white font-bold' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-400'}`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Order Quantity</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 text-sm">units</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-1">MOQ: 100 units. Better pricing at 500, 1000+.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-baseline mb-4">
              <div className="text-gray-500">
                <p className="text-xs uppercase font-bold tracking-widest">Estimated Total</p>
                <p className="text-sm">(${ (totalPrice/quantity).toFixed(2) } per unit)</p>
              </div>
              <p className="text-3xl font-black text-blue-600">${totalPrice.toLocaleString()}</p>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transform active:scale-95 transition-all ${isAdding ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              {isAdding ? 'Connecting to Store...' : 'Confirm Design & Order'}
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-3 uppercase tracking-tighter">Secure checkout via Shopify API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
