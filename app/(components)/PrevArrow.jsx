import React from 'react'
import { GrPrevious } from 'react-icons/gr'

const PrevArrow = ({onClick, currentSlide = 0, minSlide, compact = false, className = ""}) => {
  const isDisabled =
    className.includes("slick-disabled") ||
    (typeof minSlide === "number" && currentSlide <= minSlide);
  const sizeClass = compact ? "h-7.5 w-7.5 text-[10px]" : "h-10 w-10 text-sm";
  const positionClass = compact ? "left-2" : "-left-5";
  const scopeClass = compact ? "recommend-image-arrow" : "";
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <div
      className={`${scopeClass} ${sizeClass} rounded-full flex justify-center items-center bg-white text-primaryText hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out absolute top-1/2 ${positionClass} -translate-y-1/2 z-40 shadow-[0px_20px_40px_0px_#05103612] ${isDisabled ? "cursor-default opacity-80 pointer-events-none" : "cursor-pointer"}`}
      onClick={isDisabled ? undefined : handleClick}>
      <GrPrevious />
    </div>
  )
}

export default PrevArrow
