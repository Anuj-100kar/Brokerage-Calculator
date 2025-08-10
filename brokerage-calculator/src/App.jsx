import { useState } from "react";
export default function App() {
  const [buyPrice,setBuyPrice]=useState(0);
  const [sellPrice,setSellPrice]=useState(0);
  const [quantity,setQuantity]=useState(0);
  const [brokerage,setBrokerage]=useState(0.5);

  const totalBuy=buyPrice*quantity;
  const totalSell=sellPrice*quantity;
  const brokerageCharges=(totalBuy+totalSell)*(brokerage/100);
  const profitLoss=totalSell-totalBuy-brokerageCharges;
  return (
    <div className="min-h-screen flex items-center justify-center bg-cool-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="bg-white backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold text-center mb-4">📊 Brokerage Calculator</h1>
       
       <input type="number"
       placeholder="buy price"
       className="w-full p-2 mb-2 border rounded"
       onChange={(e)=>setBuyPrice(Number(e.target.value))}
       />

        <input type="number"
       placeholder="sell price"
       className="w-full p-2 mb-2 border rounded"
       onChange={(e)=>setSellPrice(Number(e.target.value))}
       />

        <input type="number"
       placeholder="quantity"
       className="w-full p-2 mb-2 border rounded"
       onChange={(e)=>setQuantity(Number(e.target.value))}
       />

        <input type="number"
       placeholder="Brokerage %"
       className="w-full p-2 mb-2 border rounded"
       onChange={(e)=>setBrokerage(Number(e.target.value))}
       />


       <div className="text-lg">
          <p>Buy Value: Rs{totalBuy.toFixed(2)}</p>
          <p>Sell Value: Rs{totalSell.toFixed(2)}</p>
          <p>Brokerage Charges: Rs{brokerageCharges.toFixed(2)}</p>
          <p className={profitLoss>=0 ? "text-green-600 font-bold" :"text-red-600 font-bold"}>
              {profitLoss>=0 ?"Profit":"Loss"}:Rs{profitLoss.toFixed(2)}
          </p>
       </div>
      </div>
    </div>
  );
}
