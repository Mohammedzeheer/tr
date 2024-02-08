// import React from 'react'

// function WeAreDesign() {
//     return (
//         <>
//             <div className="py-20 sm:py-32 bg-cover bg-center flex items-center justify-center flex-wrap" style={{ backgroundImage: `url('/images/Blue bkg.png')` }}>
//                 <div className="max-w-6xl px-8 p-4 sm:p-8 flex w-full flex-col sm:flex-row">
//                     <div className="w-full pr-0 sm:pr-8">
//                         <h1 className="fontExo text-5xl sm:text-[64px] text-white font-extrabold mb-4 w-max-[700px]">We’re a design driven team</h1>
//                     </div>
//                     <div className="w-full pr-0 sm:pr-8">
//                         <img
//                             src="/images/3D circless.png"
//                             alt="Your Right Image"
//                             // className="w-full h-auto rounded-md"
//                             className="w-48 sm:w-auto h-auto rounded-md"
//                         />
//                     </div>
//                 </div>

//                 <div className="max-w-6xl mt-[-50px] sm:mt-0 px-8 flex flex-col sm:flex-row">
//                     {/* <div className="w-full mb-8"> */}
//                     <div className="mb-8 sm:mr-40">
//                         <h1 className="fontMontserrat text-xl sm:text-3xl text-white font-extrabold mb-4 w-max-[300px]">Designing world-class products & brands</h1>
//                         <p className="text-white text-sm sm:text-xl">
//                             We've helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue.
//                         </p>
//                     </div>

//                     <div className="">
//                         <h1 className="fontMontserrat text-xl sm:text-3xl text-white font-extrabold mb-4 w-max-[300px]">Pushing boundaries & designers everywhere</h1>
//                         <p className="text-white text-sm sm:text-xl">
//                             Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries.
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default WeAreDesign

import React from 'react';

function WeAreDesign({ backgroundImage, imageUrl, title,firstHeading,secondHeading,firstDescription, secondDescription }) {
    return (
        <>
            <div className="py-20 sm:py-32 bg-cover bg-center flex items-center justify-center flex-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="max-w-6xl px-8 p-4 sm:p-8 flex w-full flex-col sm:flex-row">
                    <div className="w-full pr-0 sm:pr-8">
                        <h1 className="fontExo text-5xl sm:text-[64px] text-white font-extrabold mb-4 w-max-[700px]">{title}</h1>
                    </div>
                    <div className="w-full pr-0 sm:pr-8">
                        <img
                            src={imageUrl}
                            alt="Your Right Image"
                            className="w-48 sm:w-auto h-auto rounded-md"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mt-[-30px] sm:mt-0 px-8 flex flex-col sm:flex-row">
                    <div className="mb-8 sm:mr-40">
                        <h1 className="fontMontserrat text-xl sm:text-3xl text-white font-extrabold mb-4 w-max-[300px]">{firstHeading}</h1>
                        <p className="text-white text-sm sm:text-xl">
                        {firstDescription}
                        </p>
                    </div>

                    <div className="">
                        <h1 className="fontMontserrat text-xl sm:text-3xl text-white font-extrabold mb-4 w-max-[300px]">{secondHeading}</h1>
                        <p className="text-white text-sm sm:text-xl">
                          {secondDescription}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeAreDesign;
