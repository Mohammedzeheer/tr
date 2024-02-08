import React from 'react'

function WeTransform() {
    return (

        // <div className="relative min-h-screen flex items-center justify-center p-5">
        <div className="relative flex items-center justify-center p-5">
            <div className="absolute inset-0 bg-white"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('images/background.png')" }}
            ></div>

            <div className="relative z-10 text-center">
                {/* Subtitle */}
                <div className="fontMontserrat text-sm md:text-base font-normal leading-6 tracking-wide md:pt-20">
                    PEOPLE - CENTERED DESIGN 😎
                </div>

                {/* Title */}
                <div className="fontExo font-extrabold text-xl md:text-7xl md:leading-[75px] text-center tracking-[-1%]  uppercase text-customBlue mt-3 md:mt-7">
                    We Transform Your Business<br />
                    <span className="lowercase text-black">
                        through custom software  <br /> solutions.
                    </span>
                </div>

                {/* Description */}
                <div className="fontMontserrat text-center text-[12px] md:text-2xl font-normal leading-5 md:leading-7 tracking-wide mt-7">
                    We take responsibility of your vision as our duty and <br /> create your tomorrow. Today.
                </div>


                <div className="flex flex-row items-center justify-center mt-7">
                    {/* <button className="relative inline-flex items-center fontMontserrat cursor-pointer pl-2 pr-10 py-3 md:my-1 md:pl-6 md:pr-[70px] md:py-4  font-bold text-sm md:text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4"> */}

                    <button className="before:ease relative overflow-hidden border border-customblue text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-customBlue hover:before:-translate-x-40 inline-flex items-center fontMontserrat cursor-pointer pl-2 pr-10 py-3 md:my-1 md:pl-6 md:pr-[70px] md:py-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim  uppercase tracking-wide bg-customBlue rounded-full  mb-4 md:mb-0 md:mr-4">
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


                    <img
                        src="/images/Arrow.png"
                        alt="Responsive Image"
                        className=" md:max-w-full px-3 hidden md:block"
                    />

                    <div className="fontTheGirlNextDoor text-xs md:text-xl text-customDarkGrey font-normal tracking-wide text-left" style={{ marginLeft: '20px' }}>
                        We get <br />booked fast🔥
                    </div>
                </div>

                <img
                    src="/images/sqaureGraph3.png"
                    alt="Responsive Image"
                    className="max-w-full mt-10 md:mt-24"
                />

                <img
                    src="/images/GraphGroup.png"
                    alt="Responsive Image"
                    className="max-w-full md:mt-[-50px]"
                />


            </div>
        </div>

    )
}

export default WeTransform