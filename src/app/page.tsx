import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:w-211.5 px-6 md:px-0 gap-10 md:gap-16">

      {/* Hero Section */}
      <div className="flex justify-between items-end w-full pb-12">
        <div className="flex flex-col">
          <div className="md:hidden flex w-full justify-center mb-12">
            <div className="rounded-full bg-[#D9D9D9] w-65 h-65 shrink-0"/>
          </div>
          <p className="font-bold text-[52px] leading-12 md:leading-18 tracking-[-2px]">
            HELENA
            <span className="block">CONTRERAS</span>
          </p>
          <p className="text-[20px] md:text-[24px] leading-7.75 mt-8 md:mt-3 tracking-[-2px]">
            Mexico-based
            <span className="text-[#AD0053]"> UI/UX Designer and Graphic Designer </span>
            with 11+ combined years of experience
            conceptualizing, executing and implementing
            creative solutions for various brands and companies.
          </p>
        </div>
        <div className="hidden md:flex rounded-full bg-[#D9D9D9] w-65 h-65 shrink-0 ml-20"/>
      </div>

      {/* Track My Chores App */}
      <div className="bg-[#FFEFE0] rounded-[48px] py-8 md:py-9.75 px-4 md:px-14 flex font-bold w-full justify-between md:h-109">
        <div className="flex flex-col justify-between md:py-8">
          <p className="font-abhaya text-[24px] font-normal">
            TrackMyChores App
          </p>
          <Image
            src="/TrackMyChores/TrackMyChoresHomepagePreview.svg"
            alt="TrackMyChores Homepage Preview"
            width={295}
            height={323}
            className="md:hidden flex py-4"
          />
          <p className="text-[14px] tracking-widest">
            MOBILE APP
          </p>
          <p className="text-[24px] md:text-[31px] leading-7.75 md:leading-9.5 py-4 md:py-0">
            Building family trust through verified chore completion.
          </p>
          <Link
              href="/track-my-chores"
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-6 py-3 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/TrackMyChores/TrackMyChoresHomepagePreview.svg"
          alt="TrackMyChores Homepage Preview"
          width={326}
          height={357}
          className="hidden md:flex"
        />
      </div>

      {/* CEPPEMAC */}
      <div className="bg-[#E8F5FF] rounded-[48px] py-8 md:py-9.75 px-4 md:px-14 flex font-bold w-full justify-between md:h-109">
        <div className="flex flex-col justify-between md:py-8">
          <p className="font-abhaya text-[24px] font-normal">
            CEPPEMAC
          </p>
          <Image
            src="/CEPPEMAC/CEPPEMACHomepagePreview.svg"
            alt="CEPPEMAC Homepage Preview"
            width={297}
            height={357}
            className="md:hidden flex py-4"
          />
          <p className="text-[14px] tracking-widest">
            WEB DESIGN
          </p>
          <p className="text-[24px] md:text-[31px] leading-7.75 md:leading-9.5 py-4 md:py-0">
            Trusted mental health resources from licensed clinicians.
          </p>
          <Link
              href="/ceppemac"
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-6 py-3 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/CEPPEMAC/CEPPEMACHomepagePreview.svg"
          alt="CEPPEMAC Homepage Preview"
          width={326}
          height={357}
          className="hidden md:flex"
        />
      </div>

      {/* Grupo Rfacil */}
      <div className="bg-[#EAF4E7] rounded-[48px] py-8 md:py-9.75 px-4 md:px-14 flex font-bold w-full justify-between md:h-109">
        <div className="flex flex-col justify-between md:py-8">
          <p className="font-abhaya text-[24px] font-normal">
            Grupo Rfacil
          </p>
          <Image
            src="/GrupoRfacil/GrupoRfacilHomepagePreview.svg"
            alt="GrupoRfacil Homepage Preview"
            width={297}
            height={233}
            className="md:hidden flex py-4"
          />
          <p className="text-[14px] tracking-widest">
            ONLINE PLATFORM
          </p>
          <p className="text-[24px] md:text-[31px] leading-7.75 md:leading-9.5 py-4 md:py-0">
            Competitive edge through a professional and unified interface.
          </p>
          <Link
              href="/grupo-rfacil"
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-6 py-3 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/GrupoRfacil/GrupoRfacilHomepagePreview.svg"
          alt="GrupoRfacil Homepage Preview"
          width={353}
          height={260}
          className="hidden md:flex"
        />
      </div>

      {/* PsycheJourney App */}
      <div className="bg-[#EFEDFF] rounded-[48px] py-8 md:py-9.75 px-4 md:px-14 flex font-bold w-full justify-between md:h-109">
        <div className="flex flex-col justify-between md:py-8">
          <p className="font-abhaya text-[24px] font-normal">
            PsycheJourney App
          </p>
          <Image
            src="/PsycheJourneyApp/PsycheJourneyAppHomepagePreview.svg"
            alt="PsycheJourneyApp Homepage Preview"
            width={257}
            height={336}
            className="md:hidden flex py-4"
          />
          <p className="text-[14px] tracking-widest">
            MOBILE APP
          </p>
          <p className="text-[24px] md:text-[31px] leading-7.75 md:leading-9.5 py-4 md:py-0">
            A refined UI for conscious commerce.
          </p>
          <Link
              href="/psychejourney-app"
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-6 py-3 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/PsycheJourneyApp/PsycheJourneyAppHomepagePreview.svg"
          alt="PsycheJourneyApp Homepage Preview"
          width={257}
          height={336}
          className="hidden md:flex"
        />
      </div>

      <p className="text-[26px] md:text-[40px] font-abhaya leading-9 md:leading-12 text-center px-0 md:px-2 py-6">
        The best design solutions don’t come from
        knowing everything but from genuine curiosity
        about people and a deep obsession with making
        their lives easier.
      </p>

    </div>
  );
}
