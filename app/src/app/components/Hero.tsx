'use client'

import Image from 'next/image'

import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { DemoModal } from './Modal';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto items-center max-w-7xl pb-24 sm:pb-32 lg:flex py-32">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-shrink-0 text-center lg:text-left py-10 tracking-wider">
            <div className="">
              <div className="inline-flex space-x-6 focus-visible:outline-stone-700">
                <span className="inline-flex items-center space-x-2 text-xl leading-6 text-stone-500">
                  <span>Scratchable NFT</span>
                </span>
              </div>
            </div>
            <h1 className="mt-4 text-4xl text-stone-700 sm:text-6xl">
              Creating Walletless Digital Incentives is Here
            </h1>
            <p className="mt-10 text-2xl leading-8 text-stone-500">
              A breakthrough protocol using digital scratchable cards and Phala Network.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center mx-auto lg:mx-0 rounded-full transition-all px-5 hover:px-7 focus-visible:px-7 py-4 text-md text-white shadow-sm bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
              >
                <span>Try it out</span>  <CubeTransparentIcon className='ml-2 h-6 w-6 transition-all fill-stone-700'/>
              </button>
            </div>
          </div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[23rem] lg:w-[28rem] w-[23rem] lg:h-[28rem] rounded-full mx-auto"
          />
        </div>
      </div>
      <div
          className="absolute inset-x-0 top-[calc(55%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(57%-30rem)]"
          aria-hidden="true"
        >
        <div
          className="relative left-[calc(40%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fb923c] to-[#fdba74] opacity-30 sm:left-[calc(40%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
            'polygon(74% 44.1%, 99.9% 61.6%, 97.4% 26.9%, 85.4% 0.1%, 80.6% 2%, 72.4% 32.5%, 97.4% 74.87%, 27.05% 96.87%, 89% 14.45%, 47.3% 38.12%, 43.22% 13.63%, 7.12% 66.77%, 23.49% 8.79%, 36.29% 93.75%, 0% 64.9%, 17.8% 100%, 5.43% 19.43%, 76% 97.7%, 65.5% 49.7%)'
          }}
        />
      </div>
      <DemoModal isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  )
}
