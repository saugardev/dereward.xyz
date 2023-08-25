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
        <Link href='#' className="flex items-center ml-2">
          <span>On Testnet</span> <DocumentTextIcon className='ml-2 h-5 w-5 transition-all'/>
        </Link>
      </div>
    </div>
      
  )
}