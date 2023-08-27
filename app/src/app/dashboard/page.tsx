import { ArrowPathIcon, CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import Logo from "../components/Logo";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="text-stone-700 flex flex-col items-center justify-between mx-auto rounded-[3rem] w-full max-w-7xl min-h-[40rem] px-6 lg:flex lg:px-10 pt-16 pb-8 bg-[#F5F4EF] my-10 mb-20">
      <div className="w-full flex flex-col pb-9">
        <div className="w-full flex items-center">
          <h1 className="text-4xl sm:text-5xl">Dashboard</h1>
          <div className="flex ml-auto gap-3 items-center">
            <button className="lg:mx-0 rounded-full transition-all px-3 hover:px-7 focus-visible:px-7 py-3 text-md text-white shadow-sm bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700">
              <ArrowPathIcon className="h-7 w-7"/>
            </button>
            <button className="lg:mx-0 rounded-full transition-all px-3 hover:px-7 focus-visible:px-7 py-3 text-md text-white shadow-sm bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700">
              <PlusIcon className="h-7 w-7"/>
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <h2 className="mt-10 text-2xl leading-8 text-stone-500 mx-auto">
            Phala Hacker!
          </h2>
          <Image 
            src='/card.png'
            alt='card image'
            height={400}
            width={400}
            className="w-128 h-128 opacity-80"/>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-10 text-2xl leading-8 text-stone-500 mx-auto">
            Goal Number 2!
          </h2>
          <Image 
            src='/card.png'
            alt='card image'
            height={400}
            width={400}
            className="w-128 h-128 opacity-80"/>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-10 text-2xl leading-8 text-stone-500 mx-auto">
            Goal Number 3!
          </h2>
          <Image 
            src='/card.png'
            alt='card image'
            height={400}
            width={400}
            className="w-128 h-128 opacity-80"/>
        </div>
      </div>
      {/* <div className="flex justify-between mx-auto mt-10 w-full max-w-7xl lg:flex">
        <div className="flex flex-col">
          <Logo />
        </div>
        <div className="w-1/2 text-right">
          <Link href='#' className="text-base mr-10 opacity-80 transition-all hover:opacity-100 focus-visible:outline-crudo">Privacy Policy</Link>
          <Link href='#' className="text-base opacity-80 transition-all hover:opacity-100 focus-visible:outline-crudo">Terms of Service</Link>
        </div>
      </div> */}
    </div> 
  )
}