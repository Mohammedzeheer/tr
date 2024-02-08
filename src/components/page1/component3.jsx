import React from 'react'

function component3() {
    return (

        <div className='bg-customBlueishBlack m-[64px] rounded-[12px] p-10 md:p-[160px]'>
            {/* <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px]  tracking-[-1%]  uppercase text-white">
                        READY TO<br/>COLLABORATE?               
                    </div> */}

            <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white">
                READY TO<br className="hidden md:inline" />
                <span className="inline-block md:block">COLLABORATE?</span>
            </div>

            {/* Description */}
            <div className="fontMontserrat text-customGrey1 text-center text-sm md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                Drop us a line to Know how technology and<br />design will impact your business.
            </div>


            <div className="flex flex-row items-center justify-center mt-7">
                {/* <button className="relative inline-flex items-center fontMontserrat md:my-1 pl-7 pr-[76px] py-3.5 font-bold text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4"> */}

                <button className="relative inline-flex items-center fontMontserrat pl-4 pr-[65px] py-3 font-bold text-base md:my-1 md:pl-7 md:pr-[76px] md:py-3.5 md:font-bold md:text-xl md:leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">


                    LET’S TALK

                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-6">
                        <img
                            src="images/girl2.jpg"
                            alt="Image 1"
                            className="w-[18px] h-[18px] rounded-full  bg-white"
                        />
                        <img
                            src="images/boy1.jpg"
                            alt="Image 2"
                            className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
                        />
                        <img
                            src="images/girl1.jpg"
                            alt="Image 3"
                            className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
                        />
                    </div>
                </button>
            </div>

        </div>


        // <div className="bg-customBlueishBlack m-[64px] rounded-xl min-h-screen flex justify-center items-center p-10 md:p-20">
        //     <div className="bg-customBlueishBlack  p-10 md:p-20 w-full md:w-auto max-w-[1144px]">

        //         <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white">
        //             READY TO<br className="hidden md:inline" />
        //             <span className="inline-block md:block"> COLLABORATE?</span>
        //         </div>

        //         <div className="fontMontserrat text-customGrey1 text-center text-sm md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
        //             Drop us a line to Know how technology and<br />design will impact your business.
        //         </div>


        //         <div className="flex flex-row items-center justify-center mt-7">
        //             {/* <button className="relative inline-flex items-center fontMontserrat md:my-1 pl-7 pr-[76px] py-3.5 font-bold text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4"> */}

        //             <button className="relative inline-flex items-center fontMontserrat pl-4 pr-[65px] py-3 font-bold text-base md:my-1 md:pl-7 md:pr-[76px] md:py-3.5 md:font-bold md:text-xl md:leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
        //                 LET’S TALK

        //                 <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-6">
        //                     <img
        //                         src="images/girl2.jpg"
        //                         alt="Image 1"
        //                         className="w-[18px] h-[18px] rounded-full  bg-white"
        //                     />
        //                     <img
        //                         src="images/boy1.jpg"
        //                         alt="Image 2"
        //                         className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
        //                     />
        //                     <img
        //                         src="images/girl1.jpg"
        //                         alt="Image 3"
        //                         className="w-[18px] h-[18px] rounded-full border border-customBlue bg-white ml-[-7px]"
        //                     />
        //                 </div>
        //             </button>
        //         </div>
        //     </div>
        // </div>



    )
}

export default component3

