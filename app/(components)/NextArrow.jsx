import React from 'react'
import { GrNext } from 'react-icons/gr'

const NextArrow = ({onClick}) => {
  return (
    <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white text-primaryText text-sm hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out absolute top-1/2 -right-5 -translate-y-1/2 z-40 shadow-[0px_20px_40px_0px_#05103612] cursor-pointer' onClick={onClick}><GrNext /></div>
  )
}

export default NextArrow