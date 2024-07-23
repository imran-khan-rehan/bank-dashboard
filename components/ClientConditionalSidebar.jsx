// components/ClientConditionalSidebar.js
"use client";

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar.js';
import NavBar from './NavBar';
export default function ClientConditionalSidebar({ children }) {
  const pathname = usePathname();
  const noSidebarPages = ['/login', '/signup','/home'];

  return (
    <>
      {!noSidebarPages.includes(pathname) && <Sidebar />}


      <main className="flex flex-col w-full">
      {!noSidebarPages.includes(pathname) && <NavBar />}
      

        {children}
      </main>
    </>
  );
}
