import Image from "next/image";

export default function GrupoRfacilPage() {
    return(
        <div className="flex flex-col w-full md:w-212 px-6 md:px-0">
            <p className="text-[16px] font-semibold mb-5 mx-0 md:-mx-13.5 w-full md:w-239">
                Grupo Rfacil
            </p>

            <p className="text-[20px] md:text-[28px] leading-7 md:leading-9.5 tracking-[-2px] mb-8 mx-0 md:-mx-13.5 w-full md:w-239">
                Elevating Grupo Rfacil’s platform through a rapid, systemic redesign that
                modernized the interface, standardized visual patterns, and delivered a production
                ready design system laying a scalable foundation for evolution.
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
                        UI Design
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
                        Back-end Developers
                    </p>
                    <p>
                        Front-end Developers
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        DEVICE
                    </p>
                    <p>
                        Desktop
                    </p>
                </div>
            </div>

            <div
                className="md:relative md:left-1/2 md:right-1/2 md:-mx-[50vw] md:w-screen w-full bg-[#EAF4E7] flex justify-center
                    mb-12 md:mb-16 rounded-[20px] md:rounded-0 p-3 md:py-12 h-71.75 md:h-auto items-center"
            >
                <Image
                    src="/GrupoRfacil/GrupoRfacilComputer.svg"
                    alt="GrupoRfacil Computer"
                    width={740}
                    height={518}
                />
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Overview
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    Grupo Rfacil is an established Mexican software company with over 15
                    years in the market, specializing in comprehensive web systems for
                    administrative, financial, and electronic billing processes. Their platform
                    is critical for numerous clients across private and public sectors, but its
                    user interface had become visually dated and inconsistent, potentially
                    hindering user efficiency and modern brand perception.
                </p>
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Problem
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    The platform suffered from a non-standardized, legacy interface. The
                    inconsistent design and poor visual hierarchy across modules created a
                    fragmented user experience, increasing cognitive load for users and failing
                    to reflect the company's position as a leader in efficient business solutions.
                    This visual debt posed a risk to both user satisfaction and the platform's
                    competitive edge.
                </p>
            </div>

            <div className="flex mb-8 flex-col md:flex-row">
                <p className="font-semibold md:font-bold text-[18px] md:text-[26px] w-full md:w-56 shrink-0 mb-2 md:mb-0">
                    Solution
                </p>
                <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px]">
                    Execute a rapid, strategic visual overhaul to modernize and unify the
                    platform's interface. Deliver a coherent, professional design system with
                    production-ready UI assets, enabling immediate development
                    implementation. This refresh aimed to enhance perceived reliability, improve
                    visual clarity for users, and provide a cohesive foundation for the platform's
                    future evolution—all within a compressed timeline to meet a critical business
                    presentation deadline.
                </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#EAF4E7] flex md:py-12 pt-6 pb-12 justify-center mb-12 md:mb-16">
                <div className="md:w-212 w-full flex flex-col px-6 md:px-0 gap-4">
                    <p className="font-semibold md:font-bold text-[18px] md:text-[27px]">
                        Impact
                    </p>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center h-32.5">
                        <div className="md:w-6 w-3 shrink-0" />
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            <span className="font-semibold md:font-bold">Delivered a Cohesive Design System: </span>
                            Established a unified visual language and component
                            library, eliminating inconsistencies and providing a scalable foundation for all future
                            development.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center h-32.5">
                        <div className="md:w-6 w-3 shrink-0" />
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            <span className="font-semibold md:font-bold">Met Critical Business Deadlines: </span>
                            Successfully delivered production-ready UI assets within an
                            accelerated timeline, enabling the development team to begin implementation immediately for
                            stakeholder presentations.
                        </p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white flex py-6 pr-4 md:pr-10 pl-2 items-center h-32.5">
                        <div className="md:w-6 w-3 shrink-0" />
                        <div className="w-0.5 h-18.5 md:h-20.5 bg-brand-black mr-4 shrink-0"/>
                        <p className="text-[10px] md:text-[17px] leading-3.25 md:leading-7.25 tracking-[0.5]">
                            <span className="font-semibold md:font-bold">Enhanced Product Perception: </span>
                            A strategic foundation that allows Grupo Rfacil to present a
                            renewed, professional product face to the market.
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
                A modern, standardized interface is critical for maintaining the
                competitive edge of a mission-critical business platform
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                With an accelerated timeline, the discovery process focused on a rapid audit of the existing product
                and alignment with core business objectives.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                The goal was to quickly identify the most pressing visual and experiential gaps to address in the
                redesign. My exploration centered on three key questions:
            </p>

            <ul className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-12 list-disc pl-5 tracking-[0.5px]">
                <li>
                    What are the specific inconsistencies in the current UI that create a fragmented user experience?
                </li>
                <li>
                    How do competing and leading enterprise platforms establish clarity, hierarchy, and trust through
                    their visual design?
                </li>
                <li>
                    What are the non-negotiable business and branding requirements that the new design must
                    incorporate to be successful for both the client and their customers?
                </li>
            </ul>

            <p className="font-semibold md:font-bold text-[18px] md:text-[26px] mb-5 md:mb-8">
                Key Insights:
            </p>

            <div className="rounded-[20px] p-6 md:py-6 md:px-12 bg-[#EAF4E7] mb-6 md:mb-8 tracking-[0.5px]">
                <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                    My analysis centered on the core challenges and opportunities
                    for the platform’s redesign, leading to three guiding principles:
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between tracking-[0.5px] mb-12 gap-y-6">
                <div className="bg-[#EAF4E7] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        Fragmentation Creates Friction
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        The lack of a unified visual language across modules forced users to relearn interactions, slowing down workflows.
                    </p>
                </div>
                <div className="bg-[#EAF4E7] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        A Dated Interface Undermines Confidence
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        For enterprise clients, the platform's appearance is a direct signal of its capability and security.
                    </p>
                </div>
                <div className="bg-[#EAF4E7] rounded-[20px] p-6 flex flex-col md:w-67.75 md:h-66.5">
                    <p className="font-bold text-[20px] md:text-[23px] mb-4 leading-7.25">
                        Familiar Patterns Speed Adoption
                    </p>
                    <p className="text-[12px] md:text-[17px] leading-5 md:leading-7.25">
                        Leveraging established UX conventions reduces cognitive load and accelerates user proficiency.
                    </p>
                </div>
            </div>

            <p className="font-bold text-[14px] mb-3">
                DEFINE
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Opportunity to build confidence through a cohesive user interface.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 md:mb-3 mb-6 tracking-[0.5px]">
                My analysis revealed a clear disconnect: users needed an interface that matched the system's technical
                capability, providing the clarity and predictability essential for error-free, high-stakes financial
                operations.
            </p>

            <div className="flex justify-between tracking-[0.5px] md:mb-6 mb-8 flex-col md:flex-row gap-y-6">
                <div className="bg-[#EAF4E7] rounded-[20px] p-6 flex flex-col md:w-[412px] md:h-[305px] w-full h-full">
                    <p className="font-light text-[15px] mb-2 md:mb-0">
                        OPPORTUNITY
                    </p>
                    <p className="font-bold text-[20px] md:text-[23px] mb-2 leading-7.25">
                        A rapid, strategic modernization to meet an immediate business need.
                    </p>
                    <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25">
                        Given the accelerated timeline, the project
                        was scoped as a focused visual and
                        interface overhaul, jumping directly into
                        design execution to deliver production-
                        ready assets for development.
                    </p>
                </div>
                <div className="bg-[#EAF4E7] rounded-[20px] p-6 flex flex-col md:w-[412px] md:h-[305px] w-full h-full">
                    <p className="font-light text-[15px] mb-2 md:mb-0">
                        BUSINESS PROBLEM
                    </p>
                    <p className="font-bold text-[20px] md:text-[23px] mb-2 leading-7.25">
                        A pressing need for a modern presentation.
                    </p>
                    <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25">
                        The company required an updated,
                        professional interface to present to clients
                        and the market, with urgency driven by an
                        end-of-year deadline.
                    </p>
                </div>
            </div>

            <p className="tracking-[0.5px] text-[16px] md:text-[22px] leading-5 md:leading-7.25 italic text-center mb-8 md:mb-16 md:px-8">
                <span className="font-semibold">How might we </span>
                quickly unify and elevate the platform's visual design to meet this immediate
                business objective while laying a better foundation for the user experience?
            </p>

            <p className="font-extrabold tracking-[0.5px] text-[12px] leading-5 md:leading-7.25 md:text-[16px] mb-8">
                Goal: Deliver a complete, modernized visual system for core platform flows within a tight
                timeframe, enabling immediate development and demonstration.
            </p>

            <Image
                src="/GrupoRfacil/GrupoRfacilScreen1.svg"
                alt="GrupoRfacil Screen 1"
                width={848}
                height={603}
                className="mb-12"
            />

            <p className="font-bold text-[14px] mb-2">
                IDEATE
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 tracking-[0.5px]">
                Given the accelerated timeline, the ideation phase was streamlined into a focused execution strategy.
                The core challenge was clear: how to rapidly unify a fragmented interface into a modern, coherent
                system that feels both professional and familiar to enterprise users.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-12 md:mb-8 tracking-[0.5px]">
                I leveraged established design patterns from leading enterprise and SaaS platforms—such as clear
                data tables, consistent action buttons, and predictable navigation models—as a foundational
                benchmark. These conventions are proven to reduce cognitive load and accelerate proficiency, which
                was essential for this fast-tracked project.
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                The MoSCoW method helped prioritize design efforts within the tight deadline:
            </p>

            <Image
                src="/GrupoRfacil/GrupoRfacilHaves.svg"
                alt="Grupo Rfacil Haves"
                width={840}
                height={269}
                className="mb-6"
            />

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-12 tracking-[0.5px]">
                This framework ensured the design effort was concentrated on delivering maximum visual and
                structural impact where it mattered most, directly supporting the business goal of presenting a
                renewed, professional platform.
            </p>

            <p className="font-bold text-[14px] mb-3">
                FINAL DESIGN
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                A Unified Design System for Immediate Impact
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                Given the accelerated timeline, the final design delivered a complete and unified visual system for the
                platform’s core experience. This approach directly met the business need for a modern, professional
                interface ready for client presentation and immediate development.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                The solution focused on establishing a consistent component library, a cohesive color and typography
                scale, and standardized templates for key flows. This provided an instant visual upgrade and a scalable
                foundation, resolving the fragmentation of the legacy interface without the need for a prolonged
                discovery cycle.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-6 md:mb-12 tracking-[0.5px]">
                The outcome was a set of production-ready UI assets that successfully elevated the platform’s
                perception, aligning its outward appearance with the robustness of its underlying functionality.
            </p>

            <Image
                src="/GrupoRfacil/GrupoRfacilScreen1.svg"
                alt="GrupoRfacil Screen 1"
                width={840}
                height={592}
                className="mb-6"
            />

            <div className="flex w-full justify-center mb-12">
                <a
                    href=""
                    className="hover:bg-[#E0E0E0] bg-brand-white text-brand-black rounded-full px-4 py-2 text-[15px] w-fit border-2"
                >
                    View Prototype
                </a>
            </div>

            <p className="font-bold text-[14px] mb-3">
                REFLECTION
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                What’s next?
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                This strategic visual overhaul successfully delivered the modernized, unified interface needed for
                Grupo Rfacil's immediate business and development goals. Establishing a coherent design system and
                production-ready assets was the essential first step, transforming the platform's front-end into a
                professional, scalable foundation.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-3 tracking-[0.5px]">
                The real impact of this work will be validated through real-world use. The next focus will be on
                measuring adoption—tracking reductions in user-reported confusion, improvements in task efficiency,
                and gathering direct feedback from the platform's administrators. These insights will be crucial for
                guiding the project's evolution.
            </p>

            <p className="text-[12px] md:text-[16px] leading-5 md:leading-7.25 mb-12 tracking-[0.5px]">
                With this robust foundation now in place, the path is open for deeper enhancements. Future work can
                build directly upon this system to further advance the user experience, such as introducing
                sophisticated data visualizations for dashboards, streamlining complex multi-step workflows, and
                thoughtfully expanding the component library as the platform grows. This project has positioned the
                platform not only for its current update but for continued, user-centered refinement.
            </p>

            <p className="font-semibold md:font-bold text-[20px] md:text-[27px] leading-7 md:leading-8.5 mb-3">
                Lessons Learned
            </p>

            <div className="rounded-[20px] p-3 md:p-6 bg-[#EAF4E7] flex flex-col text-[12px] md:text-[16px] leading-5 md:leading-7.25 tracking-[0.5px] gap-3">
                <p className="p-3 md:px-6">
                    Visual cohesion is a business deliverable. For an enterprise platform, a modernized and
                    unified interface directly addresses core business needs
                </p>
                <div className="h-0.5 w-full bg-brand-white"/>
                <p className="p-3 md:px-6">
                    Scope discipline ensures impact. By strictly prioritizing the most visible and critical user flows
                    for the redesign, the project maintained focus and momentum, proving that a targeted, high-
                    impact approach often delivers more value than a broad but superficial one.
                </p>
            </div>
        </div>
    )
}