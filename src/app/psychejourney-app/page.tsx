import Image from "next/image";

export default function PsycheJourneyAppPage() {
    return(
        <div className="flex flex-col w-212">
            <p className="text-[16px] font-semibold mb-5 -mx-13.5 w-239">
                PsycheJourney App
            </p>

            <p className="text-[28px] leading-9.5 tracking-[-2px] mb-8 -mx-13.5 w-239">
                Crafting a digital environment that reflects the depth and intentionality of its
                audience, replacing sensationalist clichés with calm, trustworthy professionalism.
            </p>

            <div className="flex justify-between text-[17.5px] leading-6 mb-12 -mx-13.5 w-239">
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        ROLE
                    </p>
                    <p>
                        Conceptual UI Designer
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        TEAM
                    </p>
                    <p>
                        UI/Visual Designer
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="tracking-widest text-[14px] mb-1.5">
                        DEVICE
                    </p>
                    <p>
                        Mobile
                    </p>
                </div>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-12">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyApp4Phones.svg"
                    alt="PsycheJourney App 4 Phones"
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
                    PsycheJourney is a conceptual e-commerce platform designed for the
                    experienced practitioner. It moves beyond basic retail to serve as a
                    refined tool for the conscious community, offering curated books, artisan
                    goods, and authoritative guides. This project was an exercise in
                    sophisticated visual storytelling, crafting a digital environment that
                    reflects the depth and intentionality of its audience—replacing 
                    sensationalist clichés with calm, trustworthy professionalism.
                </p>
            </div>

            <div className="flex mb-8">
                <p className="font-bold text-[26px] w-56 shrink-0">
                    Problem
                </p>
                <p className="text-[16px] leading-7.25 tracking-[0.5px]">
                    The primary tension was aesthetic and perceptual: How to visually embody a
                    topic historically linked to chaotic “trippiness” while creating an interface
                    that feels calm, trustworthy, and professional. The goal was to design a UI
                    that seasoned users would respect—a reliable, tool-like platform that
                    dignifies its subject matter through clarity and refinement, akin to the clean
                    utility of mainstream e-commerce giants but with a unique, mindful
                    character.
                </p>
            </div>

            <div className="flex mb-8">
                <p className="font-bold text-[26px] w-56 shrink-0">
                    Solution
                </p>
                <p className="text-[16px] leading-7.25 tracking-[0.5px]">
                    The strategy was “Purposeful Clarity.” I rejected overt psychedelic tropes in
                    favor of a sophisticated pastel palette, chosen for its ability to be both
                    tranquil and subtly engaging. The layout architecture adopted the robust,
                    familiar grids of trusted platforms like Amazon, ensuring instant usability. A
                    disciplined typographic scale and ample whitespace created a sense of
                    order and seriousness. Every component—from the navigation to the
                    product cards—was designed to feel like a precise tool, emphasizing
                    legibility, clean iconography, and a seamless, goal-oriented user flow. This
                    approach positioned PsycheJourney not as a novelty shop, but as a
                    authoritative destination for meaningful exploration.
                </p>
            </div>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#EFEDFF] flex pt-2 justify-center mb-16">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyAppPhoneAndHands.svg"
                    alt="PsycheJourney App Phone and Hands"
                    width={874}
                    height={601}
                />
            </div>

            <p className="font-bold text-[27px] text-center mb-16">
                Key UI Features & Rationale
            </p>

            <p className="font-bold text-[14px] mb-3">
                DISCOVER
            </p>

            <p className="text-[16px] leading-7.25 mb-3 tracking-[0.5px]">
                Without traditional user research, the discovery phase focused on visual and perceptual analysis.
            </p>

            <ul className="text-[16px] leading-7.25 mb-12 list-disc pl-5 tracking-[0.5px]">
                <li>
                    <span className="font-semibold">Competitive Audits: </span>
                    I analyzed both mainstream e-commerce (Amazon, Mercado Libre) for their
                    flawless usability and niche wellness platforms for their tonal sensibility. The gap was clear: no one
                    combined mainstream usability with a sophisticated, respectful aesthetic for this audience.
                </li>
                <li>
                    <span className="font-semibold">Mood & Tone Exploration: </span>
                    I gathered visual references that evoked introspection, clarity, and
                    modern tranquility rather than hallucination. This included minimalist architecture, serene
                    landscapes, and high-end wellness branding, focusing on texture, soft light, and restrained color.
                </li>
                <li>
                    <span className="font-semibold">Defining the Visual Paradox: </span>
                    The key insight was that trust emerges from familiarity and legibility.
                    For a user investing in personal growth, the platform must not feel like another "trip"; it must feel
                    like a dependable guide.
                </li>
            </ul>

            <div className="mb-25 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyAppDiscoverPhones.svg"
                    alt="PsycheJourney App Discover Phones"
                    width={512}
                    height={498}
                />
            </div>

            <p className="font-bold text-[14px] mb-3">
                DEFINE
            </p>

            <p className="font-bold text-[27px] leading-8.5 mb-6">
                Opportunity to transform the clinic's offline reputation into a
                compelling and trustworthy online experience.
            </p>

            <div className="flex flex-col gap-4 tracking-[0.5px] mb-6">
                <div className="bg-[#EFEDFF] rounded-[20px] p-6 flex flex-col">
                    <p className="font-light text-[15px] mb-2">
                        USER PROBLEM
                    </p>
                    <p className="text-[16px] leading-7.25">
                        <span className="font-semibold">Experienced practitioners lack a dedicated
                        digital storefront that matches their serious, intentional approach. </span>
                        Existing visual landscapes for these products often feel commercial, garish,
                        or untrustworthy, failing to support a mindful consumer journey.
                    </p>
                </div>
                <div className="bg-[#EFEDFF] rounded-[20px] p-6 flex flex-col">
                    <p className="font-light text-[15px] mb-2">
                        DESIGN PROBLEM
                    </p>
                    <p className="font-semibold text-[16px] leading-7.25 mb-2">
                        To create a cohesive visual language that simultaneously communicates:
                    </p>
                    <ol className="text-[16px] leading-7.25 pl-5 list-decimal marker:font-semibold">
                        <li>
                            <span className="font-semibold">Professional Credibility: </span>
                            Through layout clarity, typographic hierarchy, and predictable patterns.
                        </li>
                        <li>
                            <span className="font-semibold">Unique Category Affiliation: </span>
                            Through a distinctive but soothing color story and intentional art direction.
                        </li>
                        <li>
                            <span className="font-semibold">Goal-Oriented Utility: </span>
                            Through navigation and product displays optimized for efficient discovery and purchase.
                        </li>
                    </ol>
                </div>
            </div>

            <p className="text-[16px] leading-7.25 tracking-[0.5px] mb-16">
                <span className="font-semibold">Visual Strategy Statement: </span>
                "Purposeful Clarity." The interface must act as a clear window to meaningful
                content, not a stained-glass distraction.
            </p>

            <p className="font-bold text-[14px] mb-4">
                IDEATE
            </p>

            <p className="text-[16px] leading-7.25 mb-4 tracking-[0.5px]">
                I established core pillars to guide all design decisions:
            </p>

            <ol className="text-[16px] leading-7.25 pl-5 list-decimal marker:font-semibold mb-12">
                <li>
                    <span className="font-semibold">Architecture of Trust: </span>
                    Adopt the proven, four-tab navigation model of major platforms for zero-
                    learning-curve orientation. The "Therapy" tab was given equal prominence to "Store" to signal that
                    education is a core product.
                </li>
                <li>
                    <span className="font-semibold">A Palette of Calm: </span>
                    The final color system prioritized sophistication and legibility. As shown in the
                    interface, a deep, neutral background provides a calm, serious canvas that enhances text readability
                    and focuses attention on the content. A distinct accent color is applied to key interactive elements,
                    creating clear visual hierarchy without overwhelming the senses. This intentional contrast ensures
                    accessibility and supports the platform’s goal of fostering a focused, trustworthy, and distraction-
                    free environment for exploration.
                </li>
                <li>
                    <span className="font-semibold">Typography as Voice: </span>
                    Selected a font pairing that balanced a clean, legible sans-serif for UI with a
                    subtle, elegant serif for headings to convey a tone of authoritative care.
                </li>
                <li>
                    <span className="font-semibold">Component-Driven Design: </span>
                    Sketch modular components (product cards, article previews, buttons)
                    that could be recombined across the app to ensure consistency and speed up the design process.
                </li>
            </ol>

            <div className="mb-16 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyApp1Phone.svg"
                    alt="PsycheJourney App 1 Phone"
                    width={256}
                    height={521}
                />
            </div>

            <p className="font-bold text-[14px] mb-2">
                PROTOTYPE & VISUAL EXECUTION
            </p>

            <p className="text-[16px] leading-7.25 mb-8 tracking-[0.5px]">
                The high-fidelity prototype brought the strategy to life across key user flows.
            </p>

            <p className="text-[16px] leading-7.25 mb-2 tracking-[0.5px] font-semibold">
                A. The Dashboard & Navigation
            </p>

            <p className="text-[16px] leading-7.25 mb-12 tracking-[0.5px]">
                The home screen balanced promotional hierarchy with serene spaciousness. The bottom navigation
                offered clear, weighted icons for Home, Therapy, Store, and Cart, with a profile hub accessible via a
                discreet avatar. This layout provided instant orientation.
            </p>

            <div className="mb-12 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyApp1PhoneTilted.svg"
                    alt="PsycheJourney App 1 Phone Tilted"
                    width={356}
                    height={437}
                />
            </div>

            <p className="text-[16px] leading-7.25 mb-2 tracking-[0.5px] font-semibold">
                B. The "Therapy" Section (Content Hub)
            </p>

            <p className="text-[16px] leading-7.25 mb-8 tracking-[0.5px]">
                This section was designed as a curated content library, not a chronological blog. The layout establishes
                a clear hierarchy: a prominent search bar at the top, followed by a "Weekly Highlights" carousel, and
                finally a scrollable feed of categorized articles and media.
            </p>

            <p className="text-[16px] leading-7.25 mb-12 tracking-[0.5px]">
                Content is organized into intuitive, topic-based cards for sections like "Salud Mental" (Mental Health),
                documentary "Series", and "Noticias" (News). Each card uses a consistent template with clean
                typography, ample margins, and descriptive tags, emphasizing the quality and authority of the
                resources. This structure allows users to quickly scan or deeply explore educational content,
                reinforcing the platform's role as a trusted guide in their journey.
            </p>

            <div className="mb-12 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyApp2Phones.svg"
                    alt="PsycheJourney App 2 Phones"
                    width={447}
                    height={453}
                />
            </div>

            <p className="text-[16px] leading-7.25 mb-2 tracking-[0.5px] font-semibold">
                C. The Store & Product Experience
            </p>

            <p className="text-[16px] leading-7.25 mb-8 tracking-[0.5px]">
                The store interface implements a clean, card-based grid that balances visual appeal with clear
                commerce functionality. As shown, the design includes persistent category navigation and standard e-
                commerce controls (Sort & Filter) to facilitate focused browsing.
            </p>

            <p className="text-[16px] leading-7.25 mb-12 tracking-[0.5px]">
                Each product card maintains a consistent layout: a dominant product image is paired with essential
                details—concise title, descriptive tagline, and prominent pricing—all set in a clear typographic
                hierarchy. This approach creates a familiar, trustworthy shopping environment that feels both curated
                and professional, directly countering cluttered or overwhelming alternatives. The overall composition
                prioritizes quick scanning and confident decision-making, reinforcing the platform's identity as a
                serious and reliable destination for its audience.
            </p>

            <div className="mb-12 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyApp3Phones.svg"
                    alt="PsycheJourney App 3 Phones"
                    width={855}
                    height={963}
                />
            </div>

            <p className="text-[16px] leading-7.25 mb-2 tracking-[0.5px] font-semibold">
                D. Unified Design System
            </p>

            <p className="text-[16px] leading-7.25 mb-12 tracking-[0.5px]">
                A focused style guide documented the color palette with HEX codes for primary, secondary, and UI
                states; the typographic scale for headers, body, and captions; and the library of components (buttons,
                form fields, icons). This ensured every screen felt part of a single, intentional system.
            </p>

            <div className="mb-12 flex w-full justify-center">
                <Image
                    src="/PsycheJourneyApp/PsycheJourneyAppColors.svg"
                    alt="PsycheJourney App Colors"
                    width={400}
                    height={349}
                />
            </div>

            <p className="font-bold text-[14px] mb-3">
                IMPACT: THE POTENTIAL OUTCOME
            </p>

            <p className="text-[16px] leading-7.25 mb-6 tracking-[0.5px]">
                While not user-tested, the project successfully demonstrates how strategic visual design can redefine
                a category's perception. The final UI delivers on its core objectives:
            </p>

            <ul className="text-[16px] leading-7.25 mb-12 list-disc pl-5 tracking-[0.5px]">
                <li>
                    <span className="font-semibold">Professionalism: </span>
                    It feels legitimate and trustworthy, akin to platforms for serious hobbies or
                    professional tools.
                </li>
                <li>
                    <span className="font-semibold">Calm Engagement: </span>
                    The color palette and clean layout remove visual stress, encouraging focused
                    exploration.
                </li>
                <li>
                    <span className="font-semibold">Refined Identity: </span>
                    It stands apart from generic e-commerce and niche psychedelic sites, carving out
                    a new, sophisticated visual space for the conscious community.
                </li>
            </ul>


            <p className="font-bold text-[27px] leading-8.5 mb-3">
                Lessons Learned
            </p>

            <div className="rounded-[20px] py-6 px-6 bg-[#EFEDFF] flex flex-col text-[16px] leading-7.25 tracking-[0.5px] gap-3">
                <p className="px-6">
                    Constraint Fuels Creativity: Limiting the color palette and adhering to strict grid layouts
                    forced more innovative solutions within the micro-interactions and typographic details.
                </p>
                <div className="h-0.5 w-full bg-brand-white"/>
                <p className="px-6">
                    Visual Design is Communication: Every color, font, and spacing choice communicates values.
                    Choosing calm over chaos directly supports the business goal of building trust with a
                    discerning audience.
                </p>
            </div>
        </div>
    )
}