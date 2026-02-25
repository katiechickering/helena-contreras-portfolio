'use client'

import Link from "next/link"

export const Footer = () => {
    return (
        <div className="bg-brand-black text-brand-white flex rounded-t-[48px] justify-between items-center py-10 px-20">
            <p className="font-bold text-[38px] leading-10">
                LET'S WORK
                <span className="block">TOGETHER!</span>
            </p>

            <div className="flex gap-10">
                <div className="flex flex-col gap-1.5">
                    <p className="text-[21px]">
                        Contact
                    </p>
                    <a
                        href="mailto:helena.contreras.g@gmail.com?subject=Portfolio%20Inquiry"
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        Email
                    </a>
                    <a
                        href="/resume/HelenaContrerasResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        Resume
                    </a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="text-[21px]">
                        Follow
                    </p>
                    <a
                        href="https://www.linkedin.com/in/helena-g-4b5aa0133/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href=""
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        Behance
                    </a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="text-[21px]">
                        Case Studies
                    </p>
                    <Link
                        href="/track-my-chores" 
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        TrackMyChores App
                    </Link>
                    <Link
                        href="/ceppemac" 
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        CEPPEMAC
                    </Link>
                    <Link
                        href="/grupo-rfacil" 
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        Grupo Rfacil
                    </Link>
                    <Link
                        href="/psychejourney-app" 
                        className="hover:text-[#C81F66] text-[13px]"
                    >
                        PyscheJourney App
                    </Link>
                </div>
            </div>
        </div>
    )
}