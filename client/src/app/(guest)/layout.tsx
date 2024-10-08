"use client";

import Navbar from "@/components/navbar";

import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "@/components/footer";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? ""; // Mendapatkan path URL saat ini

  // Menentukan halaman yang tidak ingin menggunakan layout
  const excludedRoutes = ["/login"];

  // Jika path saat ini termasuk dalam excludedRoutes, jangan tampilkan layout
  if (excludedRoutes.includes(pathname)) {
    return <>{children}</>; // Hanya render children tanpa layout
  }

  return (
    <div className="flex flex-col justify h-screen">
         
    <Navbar/>
      <div className="mt-16 md:mt-20">
        {children}
        {/* <ButtonBringToTop/> */}
      </div>
    <Footer/>

</div>
  );
}

export default Layout;
