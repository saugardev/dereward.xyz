import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"
import ScratchCard from "./ScratchCard"
import Image from "next/image"
import { XMarkIcon } from '@heroicons/react/24/outline';


type ModalProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function DemoModal({ isOpen, setIsOpen }: ModalProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={setIsOpen}
					as="div"
					className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
				>
					<div className="flex flex-col py-8 px-4">
						<motion.div
							className="fixed inset-0 transition-opacity"
							aria-hidden="true"
							initial={{ opacity: 0}}
							animate={{ opacity: 1}}
							exit={{ opacity: 0}}
						>
						<div className="absolute inset-0 bg-stone-200 opacity-75"></div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 30 }}
							className="sticky top-20"
						>
							<div className="flex justify-between mx-auto rounded-[3rem] w-full max-w-7xl px-6 lg:flex lg:px-10 py-16 bg-stone-700">
								<div className="flex flex-col w-1/2">
									<h2 className="mt-4 text-4xl text-crudo sm:text-5xl opacity-80">Scratch!</h2>
									<p className="mt-10 text-2xl leading-8 text-crudo opacity-80">Mantain clicked to scratch your card.</p>
								</div>
								<div className="w-1/2">
									<ScratchCard imageSrc='/logo.png'/>
								</div>
							</div>
							<button
								type="button"
								tabIndex={0}
								className="absolute top-5 right-5"
								onClick={() => setIsOpen(false)}
							>
								<XMarkIcon className='ml-2 h-10 w-10 transition-all text-crudo'/>
							</button>
						</motion.div>
					</div>
				</Dialog>
			)}
		</AnimatePresence>
	)
}
