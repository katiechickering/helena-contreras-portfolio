'use client';

import Link from "next/link";
import { useState } from "react";
import DropDownIcon from '@/assets/icons/DropDownIcon.svg'
import HeaderBar from '@/assets/HeaderBar.svg'
import MobileHeaderBar from '@/assets/MobileHeaderBar.svg'
import { XMarkIcon } from "@heroicons/react/24/outline";
import HamburgerIcon from '@/assets/icons/HamburgerIcon.svg'

export const Header = () => {

    const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50">
            <HeaderBar className="hidden md:flex w-full"/>
            <div className="bg-brand-white flex md:hidden w-full">
                <MobileHeaderBar className="w-full"/>
            </div>

            <div className="flex justify-between items-center mx-auto w-full
                px-4 sm:px-15 md:px-30 py-3 backdrop-blur-md"
            >
                <Link href="/" className="font-bold text-[24px] hover:text-[#AD0053]">
                    Helena Contreras
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 text-[15px]">
                    <div className="relative">
                        <button
                            type='button'
                            onClick={() => setIsCaseStudiesOpen(prev => !prev)}
                            className="hover:text-[#AD0053] w-fit group transition-all duration-300 flex items-center gap-1.5"
                        >
                            Case studies
                            <DropDownIcon className={`w-3.5 h-3.5 shrink-0 text-[#AAAAAA] group-hover:text-[#AD0053]
                                transition-all duration-300 ${isCaseStudiesOpen ? 'rotate-180 text-[#AD0053]' : ''}`}/>
                        </button>

                        {isCaseStudiesOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setIsCaseStudiesOpen(false)}
                                />
                                    <div
                                        className="absolute right-0 mt-4 bg-[#D9D9D9] w-56 rounded-lg shadow-xl z-50 overflow-hidden
                                            text-black animate-in fade-in zoom-in-95 duration-200"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="flex flex-col p-2">
                                            <Link 
                                                href="/track-my-chores" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsCaseStudiesOpen(false)}
                                            >
                                                TrackMyChores App
                                            </Link>
                                            <Link
                                                href="/ceppemac" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsCaseStudiesOpen(false)}
                                            >
                                                CEPPEMAC
                                            </Link>
                                            <Link
                                                href="/grupo-rfacil" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsCaseStudiesOpen(false)}
                                            >
                                                Grupo Rfacil
                                            </Link>
                                            <Link
                                                href="/psychejourney-app" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsCaseStudiesOpen(false)}
                                            >
                                                PyscheJourney App
                                            </Link>
                                        </div>
                                    </div>
                                <div/>
                            </>
                        )}
                    </div>

                    <Link href="/about" className="hover:text-[#AD0053]">
                        About
                    </Link>

                    <a
                        href="/resume/HelenaContrerasResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#AD0053]"
                    >
                        Resume
                    </a>

                    <a
                        href="mailto:helena.contreras.g@gmail.com?subject=Portfolio%20Inquiry"
                        className="hover:text-[#AD0053]"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile hamburger button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMobileOpen(prev => !prev)}
                        className="text-[#444444] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? (
                            <XMarkIcon className="w-6" />
                        ) : (
                            <HamburgerIcon width={18} height={21}/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileOpen && (
                <>
                    <div
                        className="fixed inset-0 md:hidden z-40"
                        onClick={() => setIsMobileOpen(false)}
                    />
                    <div
                        className="relative bg-[#D9D9D9] w-fit ml-auto z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col px-4 py-4 text-[16px] gap-4">
                            <Link
                                href="/about"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                About
                            </Link>

                            <Link 
                                href="/track-my-chores"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                TrackMyChores App
                            </Link>

                            <Link
                                href="/ceppemac"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                CEPPEMAC
                            </Link>

                            <Link
                                href="/grupo-rfacil"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Grupo Rfacil
                            </Link>

                            <Link
                                href="/psychejourney-app"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                PyscheJourney App
                            </Link>

                            <a
                                href="/resume/HelenaContrerasResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Resume
                            </a>

                            <a
                                href="mailto:helena.contreras.g@gmail.com?subject=Portfolio%20Inquiry"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};