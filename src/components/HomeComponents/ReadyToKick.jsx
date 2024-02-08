import React from 'react'
import LetsTalk from '../buttons/LetsTalk'
import MoreProjects from '../buttons/MoreProjects'



function ReadyToKick() {
    return (

        <div className='bg-customBlueishBlack p-10 md:pt-16 md:pb-40 py-20 md:py-32'>
            <div className="fontExo text-center font-extrabold text-[28px] md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white">
                READY TO KICK OFF OUR <br className='hidden md:block' /> COLLABORATION?
            </div>

            <div className="fontMontserrat text-customGrey1 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                Drop us a line to Know how technology and <br className='hidden md:block' />design will impact your business.
            </div>

            <div className="flex flex-row items-center justify-center mt-7 gap-2">
              <LetsTalk/> <MoreProjects/>
            </div>
        </div>
    )
}

export default ReadyToKick

