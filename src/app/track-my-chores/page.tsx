import ArrowIcon from '@/assets/icons/ArrowIcon.svg'
import Image from 'next/image'

export default function TrackMyChoresPage() {
    return(
        <div className="flex flex-col w-full md:w-212 px-6 md:px-0">
            <p className="text-[16px] font-semibold mb-5 mx-0 md:-mx-13.5 w-full md:w-239">
                Track My Chores App
            </p>

            <p className="text-[20px] md:text-[28px] leading-7 md:leading-9.5 tracking-[-2px] mb-8 mx-0 md:-mx-13.5 w-full md:w-239">
                A mobile chore-tracking system designed to reduce family conflict by replacing
                reminders with verifiable proof and transparent approval flows.
            </p>

            <div
                className="flex md:justify-between text-[14px] md:text-[17.5px] leading-6
                    mb-8 mx-0 md:-mx-13.5 w-full md:w-239 flex-wrap gap-5"
            >
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

            <p className="tracking-widest text-[14px] mb-3 -mx-13.5 w-239 hidden md:flex">
                COLLABORATION
            </p>

            <p className="text-[18px] leading-6 mb-12 -mx-13.5 w-239 hidden md:flex">
                Cross-functional remote team working under Scrum methodology with continuous communication between
                design, front-end, and back-end.
            </p>

            <div
                className="md:relative md:left-1/2 md:right-1/2 md:-mx-[50vw] md:w-screen w-full bg-[#FFEFE0] flex justify-center
                    mb-12 md:mb-16 rounded-[20px] md:rounded-0 p-3 md:py-12 h-71.75 md:h-auto items-center"
            >
                <Image
                    src="/TrackMyChores/TrackMyChores3Phones.svg"
                    alt="TrackMyChores 3 Phones"
                    width={836}
                    height={508}
                />
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Overview
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    Track My Chores is a family productivity app that replaces repetitive
                    reminders with visual proof, creating a transparent system for chore
                    accountability between parents and children.
                </p>
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Problem
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    Parents lack an efficient way to verify chore completion without
                    micromanaging, while children need a clear way to demonstrate their
                    accomplishments and receive timely feedback.
                </p>
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Solution
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    A dual-interface system where children independently document chores
                    through before/after photos, while parents review submissions via a
                    streamlined approval dashboard with side-by-side photo comparison and
                    one-tap accept/reject chores.
                </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#FFEFE0] flex md:py-12 pt-6 pb-12 justify-center mb-12 md:mb-16">
                <div className="md:w-212 w-full flex flex-col px-6 md:px-0 gap-4">
                    <p className="font-semibold md:font-bold text-[18px] md:text-[27px]">
                        Impact
                    </p>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center">
                        <p className="font-bold text-[28px] md:w-50 w-25 text-center shrink-0">
                            78%
                        </p>
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            78% of parents reported a measurable decrease in daily conflicts about
                            chores after introducing the proof-based system.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center">
                        <p className="font-bold text-[28px] md:w-50 w-25 text-center shrink-0">
                            4.7
                        </p>
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            Users rated the app's verification system with a Trust Score of 4.7/5, citing
                            "no more arguments" as the primary reason.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center">
                        <p className="font-bold text-[28px] md:w-50 w-25 text-center shrink-0">
                            -60%
                        </p>
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            Parental "check-ins" on chore status decreased by over 60% as reliance on
                            the app's verification system increased.
                        </p>
                    </div>
                </div>
            </div>

            <p className="font-semibold md:font-bold text-[18px] md:text-[27px] text-center mb-12 md:mb-16">
                Here's how I got there
            </p>

            <p className="font-bold text-[14px] mb-3">
                DISCOVER
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Trust and verification emerged as the emotional and functional
                foundation for reducing conflict in family chore management.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                To guide the design process, I began by analyzing the problem space through a review of parenting
                forums, app store reviews for competing products, and established family management principles.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                The goal was to identify the core frustrations and unmet needs in modern chore management. My
                exploration focused on understanding:
            </p>

            <ul className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-12 list-disc pl-5 tracking-[0.5px]">
                <li>
                    Common Pain Points: The recurring conflicts and points of failure in existing chore systems, both
                    digital and analog.
                </li>
                <li>
                    The Verification Gap: How the question "Is this chore done?" creates tension and undermines trust
                    between parents and children.
                </li>
                <li>
                    Desired Outcomes: The characteristics of a system that parents describe as "successful," which
                    consistently pointed to reduced conflict and clear accountability.
                </li>
            </ul>

            <p className="font-semibold md:font-bold text-[18px] md:text-[26px] mb-5 md:mb-8">
                Key Insights:
            </p>

            <div className="rounded-[20px] p-6 md:py-6 md:px-12 bg-[#FFEFE0] mb-6 md:mb-8 tracking-[0.5px]">
                <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                    Trust is critical in driving a competitive advantage for a family
                    chore tracker.
                </p>
                <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                    Because parents rely on the app to manage a recurring source of household conflict,
                    without a system that builds trust, they will revert to manual methods like nagging or
                    paper charts.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between tracking-[0.5px] md:mb-12 mb-6 gap-y-6">
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        Verification is Non-Negotiable
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        Moving beyond simple checkmarks to resolve the "he said, she said" dynamic.
                    </p>
                </div>
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        Transparency is Key
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        The process and status of chores must be clear and visible to all parties, eliminating ambiguity.
                    </p>
                </div>
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        Autonomy, Not Control
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        Families seek a tool that teaches responsibility and reduces parental nagging, not one that micromanages.
                    </p>
                </div>
            </div>

            <Image
                src="/TrackMyChores/TrackMyChoresEmpathyMap.svg"
                alt="TrackMyChores Empathy Map"
                width={842}
                height={778}
                className="mb-12"
            />

            <p className="font-bold text-[14px] mb-3">
                DEFINE
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Opportunity to build trust through creating transparency
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 md:mb-3 mb-6 tracking-[0.5px]">
                My research pointed to a clear desire: families need a system that replaces doubt with verifiable
                proof so they can trust that chores are done correctly.
            </p>

            <div className="flex justify-between tracking-[0.5px] md:mb-6 mb-8 flex-col md:flex-row gap-y-6">
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex flex-col md:w-[412px] md:h-[240px] w-full h-full">
                    <p className="font-light text-[15px] mb-2 md:mb-0">
                        USER PROBLEM
                    </p>
                    <p className="font-bold text-[20px] md:text-[23px] mb-2 leading-7.25">
                        Lack of a Trustworthy System
                    </p>
                    <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25">
                        Parents and children struggle with constant conflict and
                        second-guessing because there is no clear, neutral way to
                        confirm a chore is completed to standard.
                    </p>
                </div>
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex flex-col md:w-[412px] md:h-[240px] w-full h-full">
                    <p className="font-light text-[15px] mb-2 md:mb-0">
                        BUSINESS PROBLEM
                    </p>
                    <p className="font-bold text-[20px] md:text-[23px] mb-2 leading-7.25">
                        Lack of Competitive Edge
                    </p>
                    <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25">
                        Without a core feature that actively resolves the central
                        conflict of chore management, the app is just another digital
                        checklist, failing to motivate families to change their behavior.
                    </p>
                </div>
            </div>

            <p className="tracking-[0.5px] text-[16px] md:text-[22px] leading-5 md:leading-7.25 italic text-center mb-8 md:mb-16 md:px-8">
                <span className="font-semibold">How might we </span>
                design a verifiable completion system that increases
                trust between parents and children while giving the app a clear
                competitive advantage?
            </p>

            <p className="font-semibold tracking-[0.5px] text-[12px] leading-5 md:leading-7.25 md:text-[16px] mb-8">
                Goal: Increase perceived reliability (measured through a decrease in parental check-ins and conflict) to
                differentiate our app from basic reminder tools by making chore completion transparent, easy to verify,
                and undeniable. My goal was to avoid a surveillance feeling while still providing undeniable proof.
            </p>

            <p className="font-semibold md:font-bold text-[16px] md:text-[27px] leading-6 md:leading-8.5 mb-6">
                POV: "As a busy parent, I'm struggling to get my kids to do their
                chores consistently without the constant nagging and
                arguments, so that I can have a more peaceful and cooperative
                household."
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px] mb-6">
                To humanize my research insights and guide the design process, I developed a user persona.
            </p>

            <Image
                src="/TrackMyChores/TrackMyChoresBio.svg"
                alt="TrackMyChores Bio"
                width={848}
                height={762}
                className="mb-4"
            />

            <p className="font-semibold md:font-bold text-[14] md:text-[16px] leading-6 md:leading-7.25 tracking-[0.5px] mb-12 md:mb-20">
                How might we… help busy parents like Kristin easily manage and confidently verify that chores are
                done, without the need for constant reminders and conflict?
            </p>

            <p className="font-bold text-[14px] mb-2">
                IDEATE
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-8 tracking-[0.5px]">
                I knew we wanted to build trust through verifiable proof. The challenge was to design a verification
                system that builds accountability without feeling like a surveillance tool or making the process overly
                complex.
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Competitors are establishing familiar design patterns
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                I analyzed competing family and productivity apps, which are teaching users to expect features such as:
            </p>

            <ul className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-8 list-disc pl-5 tracking-[0.5px]">
                <li>
                    Common Pain Points: The recurring conflicts and points of failure in existing chore systems, both
                    digital and analog.
                </li>
                <li>
                    The Verification Gap: How the question "Is this chore done?" creates tension and undermines trust
                    between parents and children.
                </li>
                <li>
                    Desired Outcomes: The characteristics of a system that parents describe as "successful," which
                    consistently pointed to reduced conflict and clear accountability.
                </li>
            </ul>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                These features directly aligned with the user needs we identified in our discovery phase. However, in
                the chore-tracking space, these features are often buried or feel transactional. My opportunity was to
                build on these insights and adapt them to create a more intuitive and trust-focused experience.
            </p>

            <Image
                src="/TrackMyChores/TrackMyChoresCompetitors.svg"
                alt="TrackMyChores Competitors"
                width={846}
                height={548}
                className="mb-12 md:mb-20"
            />

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                The MoSCoW Method helped define the key features
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-3 tracking-[0.5px]">
                Based on the user research, I prioritized key features using the MoSCoW method to ensure the solution
                directly addressed core user pains around simplicity and trust.
            </p>

            <Image
                src="/TrackMyChores/TrackMyChoresHaves.svg"
                alt="Track My Chores Haves"
                width={840}
                height={156}
                className="hidden md:flex mb-16"
            />

            <Image
                src="/TrackMyChores/TrackMyChoresMobileHaves1.svg"
                alt="Track My Chores Mobile Haves 1"
                width={840}
                height={156}
                className="flex md:hidden mb-6"
            />

            <Image
                src="/TrackMyChores/TrackMyChoresMobileHaves2.svg"
                alt="Track My Chores Mobile Haves 1"
                width={840}
                height={156}
                className="flex md:hidden mb-12"
            />

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Low-fidelity sketches let us explore different layouts quickly
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                Now it was time to start visualizing! I began by sketching low-fidelity ideas for the core verification
                interaction: how a user would submit proof of a completed chore and how that proof would be
                presented for review.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-3 tracking-[0.5px]">
                My primary focus was a Streamlined Flow—a minimal, step-by-step process designed for speed and
                clarity. The goal was to make submitting proof as effortless as possible: capture a photo, add an
                optional note, and submit. The corresponding parent review interface was designed as a simple,
                focused list of tasks awaiting approval, minimizing cognitive load and decision time.
            </p>

            <div className="flex justify-between mb-12 md:mb-20 flex-col md:flex-row gap-y-6">
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex justify-center items-center md:w-[412px] md:h-[361px] w-full h-full">
                    <Image
                        src="/TrackMyChores/TrackMyChoresSketch1.svg"
                        alt="TrackMyChores Sketch 1"
                        width={299}
                        height={313}
                    />
                </div>
                <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex justify-center items-center md:w-[412px] md:h-[361px] w-full h-full">
                    <Image
                        src="/TrackMyChores/TrackMyChoresSketch2.svg"
                        alt="TrackMyChores Sketch 2"
                        width={207}
                        height={318}
                    />
                </div>
            </div>

            <p className="font-bold text-[14px] mb-3">
                PROTOTYPE & TEST
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                A functional prototype was built to test the core verification flow
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-3 tracking-[0.5px]">
                I developed a high-fidelity, functional prototype" flow for both light and dark mode, fulfilling a key
                client requirement.
            </p>

            <div
                className="bg-[#FFEFE0] md:rounded-[20px] mb-6 md:mb-3 relative left-1/2 -mx-[50vw] w-[100dvw]
                    overflow-x-auto md:overflow-visible md:w-full md:mx-auto md:left-0"
                >
                <div className="min-w-[692px] md:min-w-0 p-6 flex justify-start md:justify-center">
                    <Image
                        src="/TrackMyChores/TrackMyChoresDarkMode.svg"
                        alt="TrackMyChores Dark Mode"
                        width={692}
                        height={347}
                        className="h-auto"
                    />
                </div>
            </div>

            <div
                className="bg-[#FFEFE0] md:rounded-[20px] mb-6 md:mb-3 relative left-1/2 -mx-[50vw] w-[100dvw]
                    overflow-x-auto md:overflow-visible md:w-full md:mx-auto md:left-0"
                >
                <div className="min-w-[692px] md:min-w-0 p-6 flex justify-start md:justify-center">
                    <Image
                        src="/TrackMyChores/TrackMyChoresLightMode.svg"
                        alt="TrackMyChores Light Mode"
                        width={692}
                        height={347}
                        className="h-auto"
                    />
                </div>
            </div>

            <p className="font-bold text-[17px] leading-7.25 tracking-[0.5px] mb-3">
                Usability testing validated the design's effectiveness and identified key refinements
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px] mb-6 md:mb-8">
                We conducted moderated usability tests with five families to observe the prototype in a real world
                context. The goal was to evaluate the intuitiveness of the verification system and its impact on the
                perceived fairness and trust within the family unit.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 md:mb-3 tracking-[0.5px]">
                Participants were asked to complete two core tasks:
            </p>

            <ol className="hidden md:block text-[16px] leading-7.25 mb-6 pl-5 tracking-[0.5px] list-decimal">
                <li>
                    For the child: Submit proof that a chore was finished.
                </li>
                <li>
                    For the parent: Review and approve a completed chore.
                </li>
            </ol>

            <p className="flex md:hidden text-[12px] leading-5 tracking-[0.5px]">
                For the child: Submit proof that a chore was finished.
            </p>

            <p className="flex md:hidden text-[12px] leading-5 tracking-[0.5px] mb-6">
                For the parent: Review and approve a completed chore.
            </p>

            <div className="bg-[#FFEFE0] rounded-[20px] p-6 flex justify-center items-center">
                <Image
                    src="/TrackMyChores/TrackMyChoresSurvey.svg"
                    alt="TrackMyChores Survey"
                    width={647}
                    height={328}
                />
            </div>
        </div>
    )
}