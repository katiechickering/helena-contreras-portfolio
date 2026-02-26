import ArrowIcon from '@/assets/icons/ArrowIcon.svg'
import Image from 'next/image'

export default function TrackMyChoresPage() {
    return(
        <div className="flex flex-col w-212">
            <p className="text-[16px] font-semibold mb-5 -mx-13.5 w-239">
                Track My Chores App
            </p>

            <p className="text-[28px] leading-9.5 tracking-[-2px] mb-8 -mx-13.5 w-239">
                A mobile chore-tracking system designed to reduce family conflict by replacing
                reminders with verifiable proof and transparent approval flows.
            </p>

            <div className="flex justify-between text-[17.5px] leading-6 mb-8 -mx-13.5 w-239">
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        ROLE
                    </p>
                    <p>
                        UX Research User Flows
                    </p>
                    <p>
                        Wireframing UI Design
                    </p>
                    <p>
                        Prototyping
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        TEAM
                    </p>
                    <p>
                        Project Manager (US)
                    </p>
                    <p>
                        Front-end Developer (US)
                    </p>
                    <p>
                        Back-end Developer (US)
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        DEVICE
                    </p>
                    <p className="flex gap-2 items-center">
                        Mobile
                        <ArrowIcon className="w-[14.25px] h-[14.25px] shrink-0"/>
                    </p>
                </div>
            </div>

            <p className="tracking-widest text-[14px] mb-3 -mx-13.5 w-239">
                COLLABORATION
            </p>

            <p className="text-[18px] leading-6 mb-12 -mx-13.5 w-239">
                Cross-functional remote team working under Scrum methodology with continuous communication between
                design, front-end, and back-end.
            </p>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-12">
                <Image
                    src="/TrackMyChores/TrackMyChores3Phones.svg"
                    alt="TrackMyChores 3 phones"
                    width={1538}
                    height={540}
                    className="w-full"
                />
            </div>

            <div className="flex mb-8">
                <p className="font-bold text-[26px] w-56 shrink-0">
                    Overview
                </p>
                <p className="text-[16px] leading-7.25 tracking-[0.5px]">
                    Track My Chores is a family productivity app that replaces repetitive
                    reminders with visual proof, creating a transparent system for chore
                    accountability between parents and children.
                </p>
            </div>

            <div className="flex mb-8">
                <p className="font-bold text-[26px] w-56 shrink-0">
                    Problem
                </p>
                <p className="text-[16px] leading-7.25 tracking-[0.5px]">
                    Parents lack an efficient way to verify chore completion without
                    micromanaging, while children need a clear way to demonstrate their
                    accomplishments and receive timely feedback.
                </p>
            </div>

            <div className="flex mb-8">
                <p className="font-bold text-[26px] w-56 shrink-0">
                    Solution
                </p>
                <p className="text-[16px] leading-7.25 tracking-[0.5px]">
                    A dual-interface system where children independently document chores
                    through before/after photos, while parents review submissions via a
                    streamlined approval dashboard with side-by-side photo comparison and
                    one-tap accept/reject chores.
                </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#FFEFE0] flex py-12 justify-center mb-16">
                <div className="w-212 flex flex-col">
                    <p className="font-bold text-[27px] mb-4">
                        Impact
                    </p>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-10 pl-2 items-center mb-4">
                        <p className="font-bold text-[28px] w-50 text-center">
                            78%
                        </p>
                        <div className="w-0.5 h-20.5 bg-brand-black mr-4"/>
                        <p className="text-[17px] leading-7.25 tracking-[0.5]">
                            78% of parents reported a measurable decrease in daily conflicts about
                            chores after introducing the proof-based system.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-10 pl-2 items-center mb-4">
                        <p className="font-bold text-[28px] w-50 text-center">
                            4.7
                        </p>
                        <div className="w-0.5 h-20.5 bg-brand-black mr-4"/>
                        <p className="text-[17px] leading-7.25 tracking-[0.5]">
                            Users rated the app's verification system with a Trust Score of 4.7/5, citing
                            "no more arguments" as the primary reason.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-10 pl-2 items-center">
                        <p className="font-bold text-[28px] w-50 text-center">
                            -60%
                        </p>
                        <div className="w-0.5 h-20.5 bg-brand-black mr-4"/>
                        <p className="text-[17px] leading-7.25 tracking-[0.5]">
                            Parental "check-ins" on chore status decreased by over 60% as reliance on
                            the app's verification system increased.
                        </p>
                    </div>
                </div>
            </div>

            <p className="font-bold text-[27px] text-center mb-16">
                Here's how I got there
            </p>

            <p className="font-bold text-[14px]">
                DISCOVER
            </p>
        </div>
    )
}