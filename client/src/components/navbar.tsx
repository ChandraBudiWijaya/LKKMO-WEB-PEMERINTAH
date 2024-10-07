'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const pathname = usePathname()

    // Function to handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (pathname === '/') {
                if (window.scrollY > 50) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            } else {
                setIsScrolled(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Set initial state
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    const handleMouseEnter = (dropdownName: string) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
        setOpenDropdown(dropdownName)
    }

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null)
        }, 300)
    }

    if (pathname.includes('/admin') || pathname.includes('/login')) return null

    return (
        <nav
            className={`fixed top-0 z-30 w-full transition-colors duration-300 ${
                isScrolled || pathname !== '/'
                    ? 'bg-[#013e81] shadow-lg'
                    : 'bg-transparent'
            }`}>
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-16">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <Image
                        className="w-12"
                        src="/bandarlampung.png"
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                    <div className="ml-3">
                        <p
                            className={`text-lg md:text-2xl font-bold ${isScrolled || pathname !== '/' ? 'text-white' : 'text-black'}`}>
                            Bandar Lampung
                        </p>
                        <p
                            className={`text-xs md:text-base ${isScrolled || pathname !== '/' ? 'text-white' : 'text-black'}`}>
                            Sai Bumi Ruwa Jurai
                        </p>
                    </div>
                </div>

                {/* Centered Navigation Links */}
                <div className="hidden h-16 md:flex space-x-6 font-semibold relative mx-auto items-center">
                    <Link
                        href="/"
                        className={`text-lg px-4 py-2 flex items-center h-full ${
                            pathname == '/'
                                ? 'bg-white text-black underline'
                                : isScrolled || pathname !== '/'
                                  ? 'text-gray-200'
                                  : 'text-black'
                        }`}>
                        Beranda
                    </Link>
                    <Link
                        href="/profile"
                        className={`text-lg px-4 py-2 flex items-center h-full ${
                            pathname == '/profile'
                                ? 'bg-white text-black underline'
                                : isScrolled || pathname !== '/'
                                  ? 'text-gray-200'
                                  : 'text-black'
                        }`}>
                        Profile
                    </Link>
                    <Link
                        href="/berita"
                        className={`text-lg px-4 py-2 flex items-center h-full ${
                            pathname == '/berita'
                                ? 'bg-white text-black underline'
                                : isScrolled || pathname !== '/'
                                  ? 'text-gray-200'
                                  : 'text-black'
                        }`}>
                        Berita
                    </Link>

                    {/* Informasi with Dropdown */}
                    <div
                        className="relative group h-full"
                        onMouseEnter={() => handleMouseEnter('informasi')}
                        onMouseLeave={handleMouseLeave}>
                        <Link
                            href="/informasi"
                            className={`text-lg px-4 py-2 flex items-center h-full ${
                                pathname.startsWith('/informasi')
                                    ? 'bg-white text-black underline'
                                    : isScrolled || pathname !== '/'
                                      ? 'text-gray-200'
                                      : 'text-black'
                            }`}>
                            Informasi
                        </Link>
                        {/* Dropdown Menu for UMKM and Instansi */}
                        {openDropdown === 'informasi' && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white rounded-md shadow-lg w-40 z-50">
                                <Link
                                    href="/informasi/UMKM"
                                    className="block px-4 py-2 text-black hover:bg-gray-200">
                                    UMKM
                                </Link>
                                <Link
                                    href="/informasi/institusi-pendidikan"
                                    className="block px-4 py-2 text-black hover:bg-gray-200">
                                    Institusi Pendidikan
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Layanan with Dropdown */}
                    <div
                        className="relative group h-full"
                        onMouseEnter={() => handleMouseEnter('layanan')}
                        onMouseLeave={handleMouseLeave}>
                        <Link
                            href="/layanan"
                            className={`text-lg px-4 py-2 flex items-center h-full ${
                                pathname.startsWith('/layanan')
                                    ? 'bg-white text-black underline'
                                    : isScrolled || pathname !== '/'
                                      ? 'text-gray-200'
                                      : 'text-black'
                            }`}>
                            Layanan
                        </Link>
                        {/* Dropdown Menu */}
                        {openDropdown === 'layanan' && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white rounded-md shadow-lg w-40 z-50">
                                <Link
                                    href="https://www.lapor.go.id/"
                                    className="block px-4 py-2 text-black hover:bg-gray-200">
                                    E-Lapor
                                </Link>
                                <Link
                                    href="/layanan/pembuatan-ktp"
                                    className="block px-4 py-2 text-black hover:bg-gray-200">
                                    KTP
                                </Link>
                                <Link
                                    href="/layanan/pendaftaran-kua"
                                    className="block px-4 py-2 text-black hover:bg-gray-200">
                                    KUA
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setNavbar(!navbar)}
                        className="focus:outline-none">
                        {navbar ? (
                            <Image
                                src="/close.png"
                                width={30}
                                height={30}
                                alt="Close"
                            />
                        ) : (
                            <Image
                                src="/hamburger.png"
                                width={30}
                                height={30}
                                alt="Menu"
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {navbar && (
                <div className="md:hidden bg-[#013e81] py-2">
                    <Link
                        href="/"
                        className={`block px-4 py-2 rounded-md ${
                            pathname == '/'
                                ? 'bg-white text-black underline'
                                : 'text-gray-200'
                        }`}
                        onClick={() => setNavbar(false)}>
                        Beranda
                    </Link>
                    <Link
                        href="/profile"
                        className={`block px-4 py-2 rounded-md ${
                            pathname == '/profile'
                                ? 'bg-white text-black underline'
                                : 'text-gray-200'
                        }`}
                        onClick={() => setNavbar(false)}>
                        Profile
                    </Link>
                    <Link
                        href="/berita"
                        className={`block px-4 py-2 rounded-md ${
                            pathname == '/berita'
                                ? 'bg-white text-black underline'
                                : 'text-gray-200'
                        }`}
                        onClick={() => setNavbar(false)}>
                        Berita
                    </Link>
                    {/* Informasi Dropdown for Mobile */}
                    <button
                        onClick={() =>
                            setOpenDropdown(
                                openDropdown === 'informasi'
                                    ? null
                                    : 'informasi',
                            )
                        }
                        className="block px-4 py-2 rounded-md text-gray-200">
                        Informasi
                    </button>
                    {openDropdown === 'informasi' && (
                        <div className="pl-6">
                            <Link
                                href="/informasi/umkm"
                                className="block px-4 py-2 text-white">
                                UMKM
                            </Link>
                            <Link
                                href="/informasi/instansi"
                                className="block px-4 py-2 text-white">
                                Instansi
                            </Link>
                        </div>
                    )}
                    {/* Layanan Dropdown for Mobile */}
                    <button
                        onClick={() =>
                            setOpenDropdown(
                                openDropdown === 'layanan' ? null : 'layanan',
                            )
                        }
                        className="block px-4 py-2 rounded-md text-gray-200">
                        Layanan
                    </button>
                    {openDropdown === 'layanan' && (
                        <div className="pl-6">
                            <Link
                                href="/layanan/e-lapor"
                                className="block px-4 py-2 text-white">
                                E-Lapor
                            </Link>
                            <Link
                                href="/layanan/ktp"
                                className="block px-4 py-2 text-white">
                                KTP
                            </Link>
                            <Link
                                href="/layanan/kua"
                                className="block px-4 py-2 text-white">
                                KUA
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
