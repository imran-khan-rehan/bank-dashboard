import React from "react";
import { FaCalendarAlt } from 'react-icons/fa'; // Import an icon for the date

// Array of light color shades
const colors = [
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-teal-100",
  "bg-gray-100",
];

const transactions = [
  {
    id: 1,
    receiver: "John Doe",
    accountNumber: "1234****5678",
    amount: "$200.00",
    date: "2024-07-22",
    time: "14:30",
  },
  {
    id: 2,
    receiver: "Jane Smith",
    accountNumber: "9876****5432",
    amount: "$500.00",
    date: "2024-07-21",
    time: "09:15",
  },
  {
    id: 3,
    receiver: "Alice Johnson",
    accountNumber: "5555****4444",
    amount: "$150.00",
    date: "2024-07-20",
    time: "18:45",
  },
    {
    id: 2,
    receiver: "Jane Smith",
    accountNumber: "9876****5432",
    amount: "$500.00",
    date: "2024-07-21",
    time: "09:15",
  },
  {
    id: 3,
    receiver: "Alice Johnson",
    accountNumber: "5555****4444",
    amount: "$150.00",
    date: "2024-07-20",
    time: "18:45",
  },
  // Add more transactions as needed
];

export default function TransactionHistory() {
  return (
    <main className="min-h-screen  p-5">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Transaction History</h1>
        <p className="text-xl">Here is a record of your recent transactions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {transactions.map((transaction, index) => {
          // Choose color based on index, or use Math.random() for random colors
          const colorClass = colors[index % colors.length];
          return (
            <div
            key={transaction.id}
            className={`${colorClass} p-5 rounded-md shadow-lg transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center mb-3">
              <span className="text-lg font-bold mr-2">{transaction.receiver}</span>
            </div>
            <div className="flex justify-between mb-3">
              <div className="bg-white p-2 rounded-md">
                <span className="text-sm text-gray-700">Account:</span>
                <span className="font-semibold text-lg">{transaction.accountNumber}</span>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">{new Date(transaction.date).toLocaleDateString()} {new Date(transaction.date).toLocaleTimeString()}</span>
            </div>
            <div className="text-lg font-semibold">{transaction.amount}</div>
          </div>
          );
        })}
      </div>
    </main>
  );
}
