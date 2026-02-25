import Link from "next/link";
import TrackMyChoresHomepagePreview from '@/assets/TrackMyChores/TrackMyChoresHomepagePreview.svg'
import CEPPEMACHomepagePreview from '@/assets/CEPPEMAC/CEPPEMACHomepagePreview.svg'
import GrupoRfacilHomepagePreview from '@/assets/GrupoRfacil/GrupoRfacilHomepagePreview.svg'
import PsycheJourneyAppHomepagePreview from '@/assets/PsycheJourneyApp/PsycheJourneyAppHomepagePreview.svg'

export default function Home() {
  return (
    <div className="flex flex-col items-center py-4 md:py-28 w-[846px]">

      {/* Hero Section */}
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col">
          <p className="font-bold text-[52px] leading-18">
            HELENA
            <span className="block">CONTRERAS</span>
          </p>
          <p className="text-[22px] leading-7.75 mt-3">
            Mexico-based
            <span className="text-[#AD0053]"> UI/UX Designer and Graphic Designer </span>
            <span className="block">with 11+ combined years of experience</span>
            <span className="block">conceptualizing, executing and implementing</span>
            <span className="block">creative solutions for various brands and companies.</span>
          </p>
        </div>
        <div className="rounded-full bg-[#D9D9D9] w-65 h-65 shrink-0"/>
      </div>

      {/* Track My Chores App */}
      <div className="bg-[#FFEFE0] rounded-[48px] py-9.75 px-14 flex mt-25 font-bold w-full justify-between h-109">
        <div className="flex flex-col justify-between py-8">
          <p className="font-abhaya text-[24px] font-normal">
            TrackMyChores App
          </p>
          <p className="text-[14px] tracking-widest">
            MOBILE APP
          </p>
          <p className="text-[31px] leading-9.5">
            Building family trust
            <span className="block">through verified chore</span>
            <span className="block">completion.</span>
          </p>
          <Link
              href="/track-my-chores"
              className="hover:text-[#C81F66] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <TrackMyChoresHomepagePreview className="shrink-0 h-auto w-81.5"/>
      </div>

      {/* CEPPEMAC */}
      <div className="bg-[#E8F5FF] rounded-[48px] py-9.75 px-14 flex mt-15 font-bold w-full justify-between h-109">
        <div className="flex flex-col justify-between py-8">
          <p className="font-abhaya text-[24px] font-normal">
            CEPPEMAC
          </p>
          <p className="text-[14px] tracking-widest">
            WEB DESIGN
          </p>
          <p className="text-[31px] leading-9.5">
            Trusted mental health
            <span className="block">resources from</span>
            <span className="block">licensed clinicians.</span>
          </p>
          <Link
              href="/ceppemac"
              className="hover:text-[#C81F66] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <CEPPEMACHomepagePreview className="shrink-0 h-auto w-81.5"/>
      </div>

      {/* Grupo Rfacil */}
      <div className="bg-[#EAF4E7] rounded-[48px] py-9.75 px-14 flex mt-15 font-bold w-full justify-between h-109">
        <div className="flex flex-col justify-between py-8">
          <p className="font-abhaya text-[24px] font-normal">
            Grupo Rfacil
          </p>
          <p className="text-[14px] tracking-widest">
            ONLINE PLATFORM
          </p>
          <p className="text-[31px] leading-9.5">
            Competitive edge
            <span className="block">through a professional</span>
            <span className="block">and unified interface.</span>
          </p>
          <Link
              href="/grupo-rfacil"
              className="hover:text-[#C81F66] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <GrupoRfacilHomepagePreview className="shrink-0 h-auto w-88.25"/>
      </div>

      {/* PsycheJourney App */}
      <div className="bg-[#EFEDFF] rounded-[48px] py-9.75 px-14 flex mt-15 font-bold w-full justify-between h-109">
        <div className="flex flex-col justify-between py-8">
          <p className="font-abhaya text-[24px] font-normal">
            PsycheJourney App
          </p>
          <p className="text-[14px] tracking-widest">
            MOBILE APP
          </p>
          <p className="text-[31px] leading-9.5">
            A refined UI for
            <span className="block">conscious commerce.</span>
          </p>
          <Link
              href="/psychejourney-app"
              className="hover:text-[#C81F66] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <PsycheJourneyAppHomepagePreview className="shrink-0 h-auto w-64.25"/>
      </div>

      <p className="text-[40px] font-abhaya leading-12 text-center mt-25 px-2">
        The best design solutions don’t come from
        knowing everything but from genuine curiosity
        about people and a deep obsession with making
        their lives easier.
      </p>

    </div>
  );
}
