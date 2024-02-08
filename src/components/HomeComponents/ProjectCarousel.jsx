import React from 'react'
import Explore from './Explore';


function ProjectCarousel() {

    const gradientClasses = [
        "bg-gradient-to-b from-customBlue1 to-gray-900",
        "bg-gradient-to-b from-customRed1 to-gray-900",
        "bg-gradient-to-b from-customPurple1 to-gray-900",
    ];

    const carouselItems = [
        {
            id: 1,
            imageSrc: '/images/Snaptrack card image.png',
            badge: '/images/frame14292.svg',
            title: 'SnapTrack',
            description: 'A SAAS based state-of-the-art attendance and payroll management software.'
        },
        {
            id: 2,
            imageSrc: '/images/offrolls.png',
            badge: '/images/top2.png',
            title: 'Offrols',
            description: 'Helping corporations find the hidden talent within the dense branches.'
        },
        {
            id: 2,
            imageSrc: '/images/bizbuz.png',
            badge: '/images/top3.png',
            title: 'Biz & Buz',
            description: 'A dynamic B2B and B2C application that revolutionized public transportation.'
        },

    ];

    return (
        <>
            <div className='bg-customBlueishBlack pb-10 sm:pb-40'>
                <Explore
                    backgroundColor="customBlueishBlack"
                    titleColor="blue-400"
                    descriptionColor="customGrey1"
                    title="Explore What We Have Done"
                    description="See how we have worked on projects for clients."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 sm:pl-14">
                    {carouselItems.map((item, index) => (
                        <div key={item.id} >
                            <div className="relative w-70 h-[400px] sm:w-[364px] sm:h-[500px] rounded-3xl border-t-10 border-gray-900  shadow-2xl  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-customBlue hover:before:-translate-x-40">

                                <div className={gradientClasses[index % gradientClasses.length] + " rounded-3xl h-full relative"}>
                                    <img className="absolute -top-8 sm:-top-8 left-8  w-20 h-20 p-4 sm:w-24 sm:h-24 border-white" src={item.badge} alt="Badge" />

                                    <div className='pl-5 sm:pl-10'>
                                        <div className="fontMontserrat mt-20 pt-16 sm:pt-20 text-white text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>

                                        <p className="fontMontserrat text-white text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
                                    </div>

                                    <img className="absolute h-52 w-100 bottom-0 right-0 object-cover rounded-br-3xl" src={item.imageSrc} alt="img" />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectCarousel;




{/* <div className="relative w-70 h-[400px] sm:w-[364px] sm:h-[500px] rounded-3xl border-t-10 border-gray-900  shadow-2xl  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-customBlue hover:before:-translate-x-40"> */ }
{/* <div className="relative w-70 h-[400px] sm:w-[364px] sm:h-[500px] rounded-3xl border-t-10 border-gray-900"> */ }


{/* <div className="flex justify-end items-end"> */ }

{/* <img className=" h-[194px] mt-14 sm:mt-20" src={item.imageSrc} alt="img" /> */ }

{/* <img className="h-[194px] mt-10 sm:mt-20" src={item.imageSrc} alt="image" /> */ }
{/* <img className="h-52 mt-auto sm:mt-20" src={item.imageSrc} alt="image" /> */ }



// function ProjectCarousel() {
//     return (
//         <>
//             <div className='m-10'>
//                 <div className="relative w-80vh h-100 sm:w-[364px] sm:h-[500px] shadow-3xl rounded-3xl border-t-10 border-gray-900">

//                     {/* Gradient background */}
//                     <div className="bg-gradient-to-b from-customBlue1 to-gray-900 p-4 rounded-3xl h-full relative">

//                         {/* Badge */}
//                         <img className="absolute -top-4 sm:-top-7 left-8  w-12 h-12 sm:w-16 sm:h-16 border-white" src="/images/frame14292.svg" alt="Badge" />

//                         {/* Text heading on the left */}
//                         <div className='pl-5'>
//                             <div className="fontMontserrat mt-20 text-white text-left font-bold text-3xl mb-2 letter-spacing[-3%]">SnapTrack</div>
//                             {/* Description */}
//                             <p className="fontMontserrat text-white text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">A SAAS based state-of-the-art attendance and payroll management software.</p>

//                         </div>

//                         {/* Image */}
//                         <div className="flex justify-center items-end">
//                             <img className=" w-[110px] h-[194px] mt-10 sm:mt-20" src="/images/leave2.png" alt="Center" />
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             <div className='m-10'>
//                 <div className="relative w-80vh h-100 sm:w-[364px] sm:h-[500px] shadow-lg rounded-3xl border-t-10 border-gray-900">
//                     {/* Gradient background */}
//                     <div className="bg-gradient-to-b from-customBlue1 to-gray-900 p-4 rounded-3xl h-full relative">
//                         {/* Badge */}
//                         <img className="absolute -top-4 sm:-top-7 left-8  w-12 h-12 sm:w-16 sm:h-16 border-white" src="/images/frame14292.svg" alt="Badge" />

//                         {/* Text heading on the left */}
//                         <div className='pl-5'>
//                             <div className="fontMontserrat mt-20 text-white text-left font-bold text-3xl mb-2 letter-spacing[-3%]">SnapTrack</div>
//                             {/* Description */}
//                             <p className="fontMontserrat text-white text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">A SAAS based state-of-the-art attendance and payroll management software.</p>

//                         </div>

//                         {/* Image */}
//                         <div className="flex justify-center items-end">
//                             <img className=" w-[110px] h-[194px] mt-10 sm:mt-20" src="/images/leave2.png" alt="Center" />
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProjectCarousel


















{/* <div className="m-10 max-w-xs sm:w-364px sm:h-[500px] rounded-3xl overflow-hidden shadow-lg">
  

    <div className="bg-gradient-to-b from-customBlue1 to-gray-900 p-4 h-full">
     

        <img className="w-16 h-16 rounded-full border-2 border-white" src="/images/frame14292.svg" alt="Badge" />

        <div className="fontMontserrat text-white text-left font-bold text-3xl mb-2 letter-spacing[-3%]">SnapTrack</div>

        <p className="fontMontserrat text-white text-left font-normal text-base leading-[25.6px]">A SAAS based state-of-the-art attendance and payroll management software.</p>
    </div>

    <div className="px-6 py-4">
        <img className="w-full h-auto" src="/images/leave2.png" alt="Center" />
    </div>
</div> */}


{/* <div className="flex flex-col items-end justify-start w-auto md:w-full">
                <div className="overflow-auto overflow-x-auto w-full">
                    <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto">
                        <HomePageSnaptrackcard className="md:h-[463px] sm:h-[489px] h-[528px] relative w-full" />
                        <HomePageSnaptrackcard className="md:h-[463px] sm:h-[489px] h-[528px] relative w-full" />
                        <HomePageSnaptrackcard className="md:h-[463px] sm:h-[489px] h-[528px] relative w-full" />
                        <HomePageSnaptrackcard className="md:h-[463px] sm:h-[489px] h-[528px] relative w-full" /> */}
{/* <HomePageOffrollscard className="md:h-[425px] sm:h-[489px] h-[528px] relative w-full" /> */ }
{/* <HomePageBizbuzworkcard className="h-[528px] md:h-[550px] relative w-full" /> */ }
{/* <HomePageStackdatamappers className="md:h-[467px] sm:h-[513px] h-[528px] relative w-full" /> */ }
{/* </div>
                </div>
            </div> */}