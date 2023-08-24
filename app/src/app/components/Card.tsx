"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import Link from "next/link";

export interface CardProps {
  title: string,
  description: string,
  image: string,
  button: string,
  color: string,
  url: string,
}

export default function Card({title, description, image, button, color, url}: CardProps) {
  return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="sticky top-20"
      >
      <div className="flex justify-between mx-auto rounded-[3rem] w-full max-w-7xl px-6 lg:flex lg:px-10 py-16" style={{
        backgroundColor: color,
      }}>
        <div className="flex flex-col w-1/2">
          <h2 className="mt-4 text-4xl text-stone-700 sm:text-5xl opacity-80">{title}</h2>
          <p className="mt-10 text-2xl leading-8 text-stone-500 opacity-80">{description}</p>
          <div className="mt-auto">
            <Link href={url} className="mx-auto lg:mx-0 rounded-full transition-all px-5 hover:px-7 focus-visible:px-7 py-4 text-md text-white shadow-sm bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700">{button}</Link>
          </div>
        </div>
        <div className="w-1/2">
          <Image 
            src={image}
            alt='card image'
            height={400}
            width={400}
            className="w-[23rem] lg:w-[28rem] w-[23rem] lg:h-[28rem] mx-auto opacity-80"/>
        </div>
      </div>
    </motion.div>
  )
}