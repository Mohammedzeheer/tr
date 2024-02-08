import React from 'react'
import LetsTalk from '../buttons/LetsTalk'


function ReadyToCollabrate() {
    return (
        <div className='bg-customBlueishBlack m-8 md:m-[64px] rounded-[12px] p-10 md:p-[160px]'>

            <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white">
                READY TO<br />COLLABORATE?
            </div>

            {/* Description */}
            <div className="fontMontserrat text-customGrey1 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                Drop us a line to Know how technology and<br className='hidden md:block' />design will impact your business.
            </div>

            <div className="flex flex-row items-center justify-center mt-7">
                <LetsTalk/>
            </div>
        </div>
    )
}

export default ReadyToCollabrate