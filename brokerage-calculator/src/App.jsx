import { useEffect, useState } from "react";
export default function App() {
  const [animate,setAnimate]=useState(false);

  useEffect(()=>{
    setAnimate(true);
  },[]);

  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [segment, setSegment] = useState("equity-delivery");

  const brokerageRates = {
    "equity-delivery": 0.5,
    "equity-intraday": 0.03,
    "f&O": 0.05
  };

  const brokerage = brokerageRates[segment];

  const totalBuy = buyPrice * quantity;
  const totalSell = sellPrice * quantity;
  const brokerageCharges = (totalBuy + totalSell) * (brokerage / 100);
  const profitLoss = totalSell - totalBuy - brokerageCharges;
  return (
    <div className="min-h-screen flex items-center justify-center bg-cool-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className={` backdrop-blur-lg p-10 rounded-2xl shadow hover:shadow-xl hover:shadow-yellow-500 w-96 text-white bg-gray-900 hover:scale-105 transition-transform duration-200 ${animate?"animate-shrink-grow":""}`}>
        <h1 className="text-2xl font-bold text-center mb-4">📊 Brokerage Calculator</h1>
        <select
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white outline-none hover:shadow-glow-pink transition-all duration-200"
        >
          <option value="equity-delivery">Equity Delivery</option>
          <option value="equity-intraday">Equity Intraday</option>
          <option value="f&O">f&O (future & Options)</option>
        </select>

       
          <label htmlFor="buyPrice" className="block text-white mb-1 font-medium">
          Buy Price
        </label>
        <input 
        id="buyPrice"
        type="number"
          placeholder="buy price"
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none shadow-sm hover:shadow-glow-pink transition-all duration-200 hover:scale-105"
          onChange={(e) => setBuyPrice(Number(e.target.value))}
        />
        

        <label htmlFor="sellPrice" className="block text-white mb-1 font-medium">Sell Price</label>
        <input id="sellPrice" type="number"
          placeholder="sell price"
          className="w-full p-2 mb-4 border rounded outline-none shadow-sm hover:shadow-glow-pink transition-all duration-200 hover:scale-105 bg-transparent"
          onChange={(e) => setSellPrice(Number(e.target.value))}
        />

        <label htmlFor="quantity" className="block text-white mb-1 font-medium">Quantity</label>
        <input id="quantity" type="number"
          placeholder="quantity"
          className="w-full p-2 mb-4 border rounded shadow-sm outline-none hover:shadow-glow-pink transition-all duration-200 hover:scale-105 bg-transparent"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <label htmlFor="brokerage" className="block text-white mb-1 font-medium">Brokerage %</label>
        <input id="brokerage" type="number"
          placeholder="Brokerage %"
          className="w-full p-2 mb-4 border rounded shadow-sm outline-none hover:shadow-glow-pink transition-all duration-200 hover:scale-105 bg-transparent"
          onChange={(e) => setBrokerage(Number(e.target.value))}
        />


        <div className="text-lg">
          <p>Buy Value: Rs{totalBuy.toFixed(2)}</p>
          <p>Sell Value: Rs{totalSell.toFixed(2)}</p>
          <p>Brokerage Charges: Rs{brokerageCharges.toFixed(2)}</p>
          <p className={profitLoss >= 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
            {profitLoss >= 0 ? "Profit" : "Loss"}:Rs{profitLoss.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
