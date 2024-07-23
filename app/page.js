'use client';
import { useState } from "react";
import MoneyChart from "@/components/MoneyChart";
import Image from "next/image";

export default function Home() {
  // State to manage chart visibility
  const [showChart, setShowChart] = useState(false);

  // Toggle chart visibility
  const [showAmount, setShowAmount] = useState(false);
  const [balance, setBalance] = useState(1000); // Example static balance amount

  // Toggle amount visibility
  const handleCheckBalanceClick = () => {
    setShowAmount(!showAmount);
  };
  return (
    <main className="flex min-h-screen flex-col justify-between p-5">
      <div className='shadow-custom bg-white rounded-md flex flex-col gap-5 p-5'>
        <div className='text-3xl font-semibold'>Hi Imran!</div>
        <div className='font-normal text-lg text-[#222F43]'>Welcome back to your trusted and efficient bank app.</div>
        <div
          className="cursor-pointer font-semibold text-lg px-5 py-3 bg-yellow-500 w-fit rounded-md text-white"
          onClick={handleCheckBalanceClick}
        >
          Check Balance
        </div>
      </div>
      {showAmount && (
        <div className="text-2xl font-semibold mt-5">
          Your balance is: ${balance}
        </div>
      )}
      {/* Conditionally render the MoneyChart */}
      <MoneyChart />

      
    </main>
  );
}
