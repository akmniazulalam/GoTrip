import React from 'react'
import { LiaArrowRightSolid } from 'react-icons/lia'

const RecommendNext = ({onClick}) => {
  return (
    <button onClick={onClick} className='absolute -bottom-17.5 right-[43%] cursor-pointer z-50'><LiaArrowRightSolid className='text-primaryText text-2xl hover:text-[#7E53F9] hover:translate-x-1.5 hover:scale-125 transition-all duration-300 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] z-50' /></button>
  )
}

export default RecommendNext