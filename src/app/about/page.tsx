export default function AboutPage() {
    return(
        <div className="flex w-254 gap-12 md:gap-8 flex-col md:flex-row items-center md:items-start px-12 md:px-0">
            <div className="rounded-full bg-[#D9D9D9] w-65 h-65 shrink-0"/>
            <div className="flex flex-col w-full text-[16px] leading-5 md:leading-7.25 gap-6 tracking-[0.5px]">
                <p className="text-[24px] md:text-[36px] font-bold tracking-[-2px]">
                    Hi! I'm
                    <span className="text-[#AD0053]"> Helena</span>
                </p>
                <p className="text-[16px] md:text-[20px]">
                    I'm a Mexico-based UX/UI Designer with a foundation of over 11 years
                    in graphic design, complemented by a background in psychology. 
                </p>
                <p>
                    I apply this blend of visual expertise and human behavior insight
                    to craft intuitive, human-centered digital experiences.
                </p>
                <p>
                    My journey through marketing agencies and freelance work taught me to see
                    design as a system that influences both emotion and action. My experience collaborating
                    closely with front-end and back-end developers allows me to balance creative vision with
                    technical strategy, ensuring that every design decision is both beautiful and buildable.
                    I advocate for the user while crafting solutions that are viable and effective for the entire product team.
                </p>
                <p>
                    I’m passionate about creating intuitive, accessible interfaces where clarity and emotional impact are paramount.
                </p>
                <p>
                    When I’m not designing, I’m likely exploring my city through a camera lens
                    or brewing the perfect cup of coffee. I’m also the person friends count
                    on to find the best local coffee shop in any neighborhood.
                </p>
            </div>
        </div>
    )
}