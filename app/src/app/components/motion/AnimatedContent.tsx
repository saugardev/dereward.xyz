'use client'

import { motion } from 'framer-motion';

export default function AnimatedPage({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
