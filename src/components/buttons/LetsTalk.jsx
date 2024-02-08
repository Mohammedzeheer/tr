import React from 'react'

function LetsTalk() {
  return (
    // <button className="relative inline-flex items-center fontMontserrat pl-4 pr-[65px] py-3 font-bold text-base md:my-1 md:pl-7 md:pr-[76px] md:py-3.5 md:font-bold md:text-xl md:leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
    //   LET’S TALK
    //   <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-6">
    //     <img
    //       src="images/girl2.jpg"
    //       alt="Image 1"
    //       className="w-[18px] h-[18px] rounded-full  bg-white"
    //     />
    //     <img
    //       src="images/boy1.jpg"
    //       alt="Image 2"
    //       className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
    //     />
    //     <img
    //       src="images/girl1.jpg"
    //       alt="Image 3"
    //       className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
    //     />
    //   </div>
    // </button>

<button className="before:ease relative overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-customBlue hover:before:-translate-x-40 inline-flex items-center fontMontserrat cursor-pointer pl-2 pr-10 py-3 md:my-1 md:pl-6 md:pr-[70px] md:py-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim  uppercase tracking-wide bg-customBlue rounded-full  mb-4 md:mb-0 md:mr-4">
<span relative="relative z-10">LET’S TALK</span>


<div className="absolute right-0 top-0 bottom-0 flex items-center pr-1 md:pr-6">
    <img
        src="images/girl2.jpg"
        alt="Image 1"
        className="w-[18px] h-[18px] rounded-full bg-white"
    />
    <img
        src="images/boy1.jpg"
        alt="Image 2"
        className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px] hidden md:block" // Adjust margin-left here
    />
    <img
        src="images/girl1.jpg"
        alt="Image 3"
        className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px]" // Adjust margin-left here
    />
</div>
</button>
  )
}

export default LetsTalk

