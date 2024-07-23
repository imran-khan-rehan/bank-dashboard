'use client';
import React, { useState } from "react";

export default function TransferMoney() {
    const [recipient, setRecipient] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [transferMessage, setTransferMessage] = useState('');

    const handleTransfer = (e) => {
        e.preventDefault();
        alert(`Transferred ${amount} to ${recipient} (${accountNumber})`);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center  p-5">
            {/* <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Secure Money Transfer</h1>
                <p className="text-xl">Transfer your money safely and freely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 w-full max-w-6xl">
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 text-center border border-gray-200">
                    <img src="/icons/SENDMONEY/secure.jpeg" alt="Secure" className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h2 className="text-xl font-semibold">Secure</h2>
                    <p>Your transactions are safe with our advanced security measures.</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 text-center border border-gray-200">
                    <img src="/icons/SENDMONEY/fast.jpeg" alt="Fast" className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h2 className="text-xl font-semibold">Fast</h2>
                    <p>Experience lightning-fast money transfers.</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 text-center border border-gray-200">
                    <img src="/icons/SENDMONEY/convenient.jpeg" alt="Convenient" className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h2 className="text-xl font-semibold">Convenient</h2>
                    <p>Easily manage all your transactions in one place.</p>
                </div>
            </div> */}



            <div className="relative h-screen bg-cover bg-center text-center bg-white bg-opacity-85 bg-blend-overlay" style={{ backgroundImage: "url('/icons/SENDMONEY/gmBg.jpg')" }}>
                <div className=" w-full h-7 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/icons/SENDMONEY/gmBg.jp')" }}></div>
                <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Secure Money Transfer</h1>
                <p className="text-xl">Transfer your money safely and freely.</p>
            </div>                <div className="flex flex-wrap justify-between gap-10 bg-white w-4/5 p-8 mx-auto text-center mb-10">
                    <div className="flex flex-col  w-1/2">
                        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-lg w-full border border-gray-200">
                            <form onSubmit={handleTransfer} className="space-y-5">
                                <div>
                                    <label className="block text-lg font-medium">Recipient Name</label>
                                    <input
                                        type="text"
                                        value={recipient}
                                        onChange={(e) => setRecipient(e.target.value)}
                                        className="mt-1 block w-full p-3 bg-white bg-opacity-60 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-medium">Recipient Account Number</label>
                                    <input
                                        type="text"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        className="mt-1 block w-full p-3 bg-white bg-opacity-60 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-medium">Amount</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="mt-1 block w-full p-3 bg-white bg-opacity-60 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
                                >
                                    Transfer Money
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-[45%] flex items-center">
                        <img src="/icons/SENDMONEY/add.jpeg" alt="" className="w-full" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-11 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/images/curved-bottom.svg')" }}></div>
            </div>


        </main>
    );
}
