'use client'

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ContentProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Content({ modal, setModal }: ContentProps) {
  return (
    <motion.div
      animate={{
        opacity: modal ? 0.5 : 1
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <h2 className="text-4xl capitalize">hello there</h2>
      <button
        className="bg-indigo-600 my-3 text-white uppercase text-sm px-4 h-10 rounded"
        onClick={() => setModal((modal) => !modal)}
      >
        {modal ? "Close modal" : "Show modal"}
      </button>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
    </motion.div>
  );
}

interface ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnimatedModal({ modal, setModal }: ModalProps) {
  return (
    <AnimatePresence>
      {modal && (
        <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -50,
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute z-10 p-5 bg-indigo-600 h-auto w-full max-w-md rounded text-white"
          >
            <button
              onClick={() => setModal((modal) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-indigo-600 border border-indigo-600 h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setModal((modal) => !modal)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default function Modal() {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="container mx-auto p-8">
      <Content {...{ modal, setModal }} />
      <AnimatedModal {...{ modal, setModal }} />
    </div>
  );
}
