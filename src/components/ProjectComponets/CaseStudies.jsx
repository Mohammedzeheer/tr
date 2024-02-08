import React from 'react'
import Explore from '../HomeComponents/Explore';


function CaseStudies() {

    const gradientClasses = [
        "bg-gradient-to-b from-customBlue1 to-gray-900",
        "bg-gradient-to-b from-customRed1 to-gray-900",
        "bg-gradient-to-b from-customPurple1 to-gray-900",
      ];

    const carouselItems = [
        {
            id: 1,
            imageSrc: '/images/leave2.png',
            badge:'/images/frame14292.svg', 
            title: 'SnapTrack',
            description: 'A SAAS based state-of-the-art attendance and payroll management software.'
        },
        {
            id: 2,
            imageSrc: '/images/offrolls.png',
            badge:'/images/top2.png',
            title: 'Offrols',
            description: 'Helping corporations find the hidden talent within the dense branches.'
        },
        {
            id: 2,
            imageSrc: '/images/bizbuz.png',
            badge:'/images/top3.png',
            title: 'Biz & Buz',
            description: 'A dynamic B2B and B2C application that revolutionized public transportation.'
        },

    ];

    return (
        <>
         <Explore 
                backgroundColor="white"
                titleColor =""
                descriptionColor="customBlueishBlack"
                title="Case Studies"
                description="Explore how our innovative solutions have addressed unique challenges for our clients."
            />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 pb-20 sm:pl-14">
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
        </>
    );
}

export default CaseStudies;