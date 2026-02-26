import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-211.5">

      {/* Hero Section */}
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col">
          <p className="font-bold text-[52px] leading-18 tracking-[-2px]">
            HELENA
            <span className="block">CONTRERAS</span>
          </p>
          <p className="text-[24px] leading-7.75 mt-3 tracking-[-2px]">
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
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/TrackMyChores/TrackMyChoresHomepagePreview.svg"
          alt="TrackMyChores Homepage Preview"
          width={326}
          height={357}
          className="shrink-0"
        />
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
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/CEPPEMAC/CEPPEMACHomepagePreview.svg"
          alt="CEPPEMAC Homepage Preview"
          width={326}
          height={357}
          className="shrink-0"
        />
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
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/GrupoRfacil/GrupoRfacilHomepagePreview.svg"
          alt="GrupoRfacil Homepage Preview"
          width={353}
          height={260}
          className="shrink-0"
        />
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
              className="hover:bg-[#999999] bg-brand-black text-brand-white rounded-full px-4 py-2 text-[15px] w-fit"
          >
              View Case Study
          </Link>
        </div>
        <Image
          src="/PsycheJourneyApp/PsycheJourneyAppHomepagePreview.svg"
          alt="PsycheJourneyApp Homepage Preview"
          width={257}
          height={336}
          className="shrink-0"
        />
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
