import React from 'react'
import { LiaArrowLeftSolid } from 'react-icons/lia'

const RecommendPrev = ({onClick, className = ""}) => {
  const isDisabled = className.includes("slick-disabled");

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      className={`absolute -bottom-17.5 left-[43%] z-50 ${isDisabled ? "cursor-default" : "cursor-pointer"}`}>
      <LiaArrowLeftSolid
        className={`text-2xl transition-all duration-300 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] ${isDisabled ? "text-[#1010104d]" : "text-primaryText hover:text-[#7E53F9] hover:-translate-x-1.5 hover:scale-125"}`}
      />
    </button>
  )
}

export default RecommendPrev
