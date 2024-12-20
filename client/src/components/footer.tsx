'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Footer() {
    const pathname = usePathname()

    // Avoid rendering the footer on admin or login pages
    if (pathname.includes('/admin') || pathname.includes('/login')) return null

    return (
        <footer className="w-full bg-[#013e81] mt-10 text-white font-Montserrat">
            {/* Footer Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:justify-between md:items-center">
                {/* Left section with contact details */}
                <div className="mb-6 md:mb-0">
                    <h1 className="font-bold text-xl">Bandarlampung.GO.ID</h1>
                    <p>Telp : (+62) 081215143321</p>
                    <p>Jl. Cendrawasih Bandarlampung, Lampung, Indonesia</p>
                    <p>Faks : (+62) 081215143321</p>
                    <p>Surel : <span><a href="bdl@bandarlampung.go.id"></a>bdl@bandarlampung.go.id</span></p>
                </div>

                {/* Social media icons */}
                <div className="flex items-center space-x-4">
                    <Link href="https://x.com/KominfotikLpg">
                        <Image
                            src="/x.png" // Replace with the actual path to the X (formerly Twitter) icon
                            alt="X"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>

                    <Link href="https://instagram.com/diskominfotik.lampung">
                        <Image
                            src="/instagram.png" // Replace with the actual path to the Instagram icon
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>

                    <Link href="https://youtube.com/@diskominfotiklampung">
                        <Image
                            src="/youtube.png" // Replace with the actual path to the YouTube icon
                            alt="YouTube"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mt-4"></div>

            {/* Footer Bottom */}
            <div className="text-center py-4">
                <p className="text-sm">
                    © 2024 Dinas Komunikasi, Informatika dan Statistik Pemprov
                    Bandarlampung
                </p>
            </div>
        </footer>
    )
}

export default Footer
