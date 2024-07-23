'use client';
// components/Menu.js
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from '@/public/icons/home.svg';
import accountsIcon from '@/public/icons/accounts.svg';
import transactionsIcon from '@/public/icons/transactions.svg';
import crossIcon from '@/public/icons/cross.svg';

const Sidebar = ({ openMenu }) => {
  const [selected, setSelected] = useState('/');
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    openMenu(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: 'Home', icon: homeIcon, path: '/' },
    { name: 'Money Transfer', icon: homeIcon, path: '/send-money' },
    { name: 'Add Money', icon: homeIcon, path: '/add-money' },
    { name: 'Transactions', icon: transactionsIcon, path: '/transactions' },
    { name: 'Logout', icon: homeIcon, path: '/logout' }
  ];

  return (
    <div ref={dropdownRef} className=' w-[20%] flex flex-col gap-4 shadow-custom min-h-screen max-h-fit pb-[100px] pt-[30px] pl-[10px] overflow-y-auto bg-white max-md:items-start z-10'>
      <div className='flex flex-row gap-3 px-5 py-5 w-[244px]'>
        <div onClick={closeDropdown} className='md:hidden cursor-pointer my-auto'>
          <img src={crossIcon.src} width={15} height={15} alt='X' />
        </div>
        <p className='font-bold text-3xl max-md:text-lg'>Bank App</p>
      </div>
      {menuItems.map(item => (
        <Link key={item.name} href={item.path} passHref>
          <div
            className={`ml-3 py-3 cursor-pointer hover:bg-slate-200 shadow-custom w-[90%] flex flex-row rounded-md ${selected === item.path ? 'bg-yellow-500 text-white hover:bg-yellow-500' : 'bg-white text-black'}`}
            onClick={() => setSelected(item.path)}
          >
            <div className={`px-4 ${selected === item.path ? 'invert' : ''}`}>
              <Image src={item.icon} width={25} height={25} alt={item.name} />
            </div>
            <div className='text-lg font-medium flex flex-row justify-between'>
              {item.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
