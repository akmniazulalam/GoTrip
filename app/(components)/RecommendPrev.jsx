import React from 'react'
import { LiaArrowLeftSolid } from 'react-icons/lia'

const RecommendPrev = ({onClick}) => {
  return (
    <button onClick={onClick} className='cursor-pointer absolute -bottom-17.5 left-[43%] z-50'><LiaArrowLeftSolid className='text-primaryText text-2xl hover:text-[#7E53F9] hover:-translate-x-1.5 hover:scale-125 transition-all duration-300 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]' /></button>
  )
}

export default RecommendPrev