'use client'

import { useState } from "react";

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from "framer-motion";

export interface AnimatedFAQProps {
  question: string;
  answer: string;
}

export default function AnimatedFAQ({ question, answer }: AnimatedFAQProps) {
    const [show, setShow] = useState(false);

    return (
      <>
        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer opacity-80 transition-all hover:opacity-100">
          <h3 className="mt-4 text-3xl text-stone-700 sm:text-4xl">{question}</h3>
          <ChevronDownIcon className={`-mr-0.5 h-10 w-10 transition-all fill-stone-700 ${show ? "rotate-180" : ""}`} />
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="truncate"
            >
              <p className="mt-10 text-2xl leading-8 text-stone-500">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
};
