import React from 'react'
import { GrPrevious } from 'react-icons/gr'

const PrevArrow = ({onClick, currentSlide = 0, minSlide}) => {
  const isDisabled = typeof minSlide === "number" && currentSlide <= minSlide;

  return (
    <div
      className={`h-10 w-10 rounded-full flex justify-center items-center bg-white text-primaryText text-sm hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out absolute top-1/2 -left-5 -translate-y-1/2 z-40 shadow-[0px_20px_40px_0px_#05103612] ${isDisabled ? "cursor-default opacity-80 pointer-events-none" : "cursor-pointer"}`}
      onClick={isDisabled ? undefined : onClick}>
      <GrPrevious />
    </div>
  )
}

export default PrevArrow
