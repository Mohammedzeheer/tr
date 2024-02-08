import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";

function MoreProjects() {
    return (
        <>
            <button className="relative overflow-hidden text-white shadow-2xl inline-flex items-center fontMontserrat cursor-pointer px-2 py-3 md:my-1 md:px-6 md:py-4 mb-4 md:mb-0 md:mr-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim  uppercase tracking-wide border border-white border-solid rounded-full hover:bg-customBlue" >
                <span relative="relative z-10">More Project</span>
                <BsArrowRightCircleFill className="ml-2 text-2xl text-white hover:text-white-700 lg md:text-2xl" />
            </button>
        </>
    )
}

export default MoreProjects