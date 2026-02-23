'use client';

import Link from "next/link";
import { useState } from "react";
import DropDownIcon from '@/assets/icons/DropDownIcon.svg'
import HeaderBar from '@/assets/HeaderBar.svg'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 flex flex-col backdrop-blur-md">
            <HeaderBar className="w-full"/>

            <div className="flex justify-between items-center max-w-7xl mx-auto w-full
                px-4 sm:px-10 md:px-12 py-4"
            >
                <Link href="/" className="font-bold text-[24px] hover:text-[#AD0053]">
                    Helena Contreras
                </Link>

                {/* Desktop Nav */}
                <div className="flex gap-8 text-[16px]">
                    <div className="relative">
                        <button
                            type='button'
                            onClick={() => setIsOpen(prev => !prev)}
                            className="hover:text-[#AD0053] w-fit group transition-all duration-300 flex items-center gap-1.5"
                        >
                            Case studies
                            <DropDownIcon className={`w-3.5 h-3.5 shrink-0 text-[#AAAAAA] group-hover:text-[#AD0053]
                                transition-all duration-300 ${isOpen ? 'rotate-180 text-[#AD0053]' : ''}`}/>
                        </button>

                        {isOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setIsOpen(false)}
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
                                                onClick={() => setIsOpen(false)}
                                            >
                                                TrackMyChores App
                                            </Link>
                                            <Link
                                                href="/ceppemac" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                CEPPEMAC
                                            </Link>
                                            <Link
                                                href="/grupo-rfacil" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Grupo Rfacil
                                            </Link>
                                            <Link
                                                href="/psychejourney-app" 
                                                className="px-4 py-2 hover:bg-white/50 hover:text-[#AD0053] rounded-md transition-colors"
                                                onClick={() => setIsOpen(false)}
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
            </div>
        </nav>
    );
};