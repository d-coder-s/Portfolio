'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2 } from 'lucide-react'

const Page = () => {
  const router = useRouter()
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    // Navigate after animation completes
    const timer = setTimeout(() => {
      setComplete(true)
      setTimeout(() => {
        router.push('/home')
      }, 500)
    }, 2500) // 2.5 seconds delay

    return () => clearTimeout(timer)
  }, [router])

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white'
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={64} className="text-blue-500" />
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-widest font-[family-name:var(--font-geist-mono)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              DCODER
            </motion.h1>

            <motion.div
              className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Page