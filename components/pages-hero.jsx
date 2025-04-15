import React from 'react'

export default function PagesHero() {
  return (
    <div>
      <div className="p-16 bg-[url(/images/herobg1.jpg)] max-w-screen min-h-[40%] bg-contain bg-right bg-no-repeat relative text-white flex flex-col gap-4 items-center justify-center">
            <div className="absolute inset-0 bg-[#161c3b] opacity-80"></div>
            <p className='z-10 font-semibold'>Home / Services</p>
            </div>
    </div>
  )
}
