import Link from "next/link";
import Logo from "./Logo";

import { DocumentTextIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <div className="mx-auto flex justify-between items-center max-w-7xl py-5 text-stone-700">
      <Logo />
      <div className="flex items-center">
        <div className="relative flex h-3 w-3 ml-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-300"></span>
        </div>
        <Link href='https://mumbai.polygonscan.com/address/0x277822b5c12eb6e2a5f7a9107b6b68869b9b2147' target="_blank" className="flex items-center ml-2">
          <span>On Testnet</span> <DocumentTextIcon className='ml-2 mr-5 h-5 w-5 transition-all'/>
        </Link>
        <Link href='#' className="mx-auto lg:mx-0 rounded-full transition-all px-5 hover:bg-stone-700 hover:text-white focus-visible:px-7 py-4 text-md text-stone-700 shadow-sm bg-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700">Click to Action</Link>
      </div>
    </div>
      
  )
}