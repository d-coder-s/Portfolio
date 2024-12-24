'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  })
  return (
    <div className='items-center text-xl min-h-screen justify-center flex pt-80 w-full'>
      Loading...
    </div>
  )
}

export default Page