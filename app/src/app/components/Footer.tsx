import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

import AnimatedContent from '../components/motion/AnimatedContent';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const props = {
  title: 'Use Cases',
  description: "Our authenticity protocol is designed to cater to various industries such as retail, finance, digital media, and more.",
  image: '/tags.png',
  button: 'Discover +100 cases',
  color: '#292524',
  url: '/cases'
}

export default function Footer() {
  return (
    <AnimatedContent>
      <footer className="text-crudo flex flex-col justify-between mx-auto rounded-[3rem] w-full max-w-7xl px-6 lg:flex lg:px-10 pt-16 pb-8 bg-stone-800 my-10 mb-20">
        <div className="flex pb-9">
          <div className="flex flex-col w-1/2">
            <h2 className="mt-4 text-4xl sm:text-5xl">Ready to use DeReward?</h2>
            <p className="mt-10 text-2xl leading-8 opacity-80">Get in touch with us</p>
            <div className="mt-10 flex items-center">
              <Link href='#' className="flex items-center mx-auto lg:mx-0 rounded-full transition-all px-5 hover:px-7 focus-visible:px-7 py-4 text-md text-stone-800 shadow-sm bg-crudo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crudo">
                <span>Try it out</span>  <CalendarDaysIcon className='ml-2 h-6 w-6 transition-all text-stone-700'/>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-auto mt-10 w-full max-w-7xl lg:flex">
          <div className="flex flex-col">
            <Logo />
          </div>
          <div className="w-1/2 text-right">
            <Link href='#' className="text-base mr-10 opacity-80 transition-all hover:opacity-100 focus-visible:outline-crudo">Privacy Policy</Link>
            <Link href='#' className="text-base opacity-80 transition-all hover:opacity-100 focus-visible:outline-crudo">Terms of Service</Link>
          </div>
        </div>
      </footer>      
    </AnimatedContent>
  )
}
