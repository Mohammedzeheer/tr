import React from 'react'

function component1() {
    return (

<div className="relative min-h-screen flex items-center justify-center p-5">
    <div className="absolute inset-0 bg-white"></div>
    <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('images/background.png')" }}
    ></div>

    <div className="relative z-10 text-center">
        {/* Subtitle */}
        <div className="fontMontserrat text-sm md:text-base font-normal leading-6 tracking-wide pt-20">
            PEOPLE - CENTERED DESIGN 😎
        </div>

        {/* Title */}
        <div className="fontExo font-extrabold text-3xl md:text-7xl leading-[2.5rem] md:leading-[75px] text-center tracking-[-1%]  uppercase text-customBlue mt-7">
            We Transform Your Business<br />
            <span className="lowercase text-black">
                through custom software  <br /> solutions.
            </span>
        </div>

        {/* Description */}
        <div className="fontMontserrat text-center text-sm md:text-lg font-normal leading-5 md:leading-7 tracking-wide mt-7">
            We take responsibility of your vision as our duty and <br /> create your tomorrow. Today.
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-center mt-7"> */}
     
                <div className="flex flex-row items-center justify-center mt-7">
                    {/* <button className="flex items-center justify-center px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                        LET’S TALK
                    </button> */}

                    <button className="relative inline-flex items-center fontMontserrat md:my-1 pl-6 pr-[70px] py-4  font-bold text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                   
                  LET’S TALK 
             
                        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-6">
                          <img
                            src="images/girl2.jpg"
                            alt="Image 1"
                            className="w-[18px] h-[18px] rounded-full bg-white"
                          />
                          <img
                            src="images/boy1.jpg"
                            alt="Image 2"
                            className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px]" // Adjust margin-left here
                          />
                          <img
                            src="images/girl1.jpg"
                            alt="Image 3"
                            className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px]" // Adjust margin-left here
                          />
                        </div>
                      </button>

                    <div className="fontTheGirlNextDoor text-sm md:text-xl text-customDarkGrey font-normal leading-7 tracking-wide text-left" style={{ marginLeft: '20px' }}>
                        We get <br />booked fast🔥
                    </div>
                </div>



                {/* <div className="md:mt-20 flex flex-col items-center md:flex-row md:justify-center md:space-x-4 md:space-y-0">
                    <div className="md:w-400 h-400 max-w-sm bg-gradient-to-br from-pink-500 via-blue-300 to-yellow-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full h-full p-20 rounded-xl" src="images/graph1.png" alt="product image" />
                        </a>
                    </div>
                    <div className="md:w-400 h-400 max-w-sm bg-gradient-to-br from-yellow-500 via-pink-500 to-blue-300 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full h-full p-20 rounded-2xl object-contain" src="images/graph2.png" alt="product image" />
                        </a>
                    </div>
                    <div className="md:w-400 h-400 max-w-sm bg-gradient-to-br from-pink-500 via-yellow-500 to-blue-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full h-full pt-[60px] px-20 object-contain" src="images/graph3.png" alt="product image" />
                        </a>
                    </div>
                </div> */}

<img
            src="/images/square3.png" 
            alt="Responsive Image"
            className="max-w-full mt-20" 
        />

                



    </div>
</div>


    )
}

export default component1













        // <div className="relative h-screen">
        //     <div className="absolute inset-0 bg-white"></div>
        //     <div
        //         className="absolute inset-0 bg-cover bg-center opacity-50"
        //         style={{ backgroundImage: "url('images/background.png')" }}
        //     ></div>

        //     <div className="absolute inset-0 flex items-center justify-center">
        //         <div className="text-center">
        //             {/* Subtitle */}
        //             <div className="fontMontserrat text-base font-normal leading-6 tracking-[3%]">
        //                 PEOPLE - CENTERED DESIGN 😎
        //             </div>

        //             {/* Title */}
        //             <div className="fontExo font-extrabold text-7xl leading-[75px] text-center tracking-[-1%] uppercase text-customBlue mt-7">
        //                 We Transform Your Business<br />
        //                 <span className='lowercase text-black'>
        //                     through custom software  <br /> solutions.
        //                 </span>
        //             </div>

        //             {/* Description */}
        //             <div className="fontMontserrat text-center text-[24px] font-normal leading-9 tracking-[3%] mt-7">
        //                 We take responsibility of your vision as our duty and <br /> create your tomorrow. Today.
        //             </div>


        //             <div class="flex items-center justify-center">
        //                 <div class="m-10">
        //                     <button class="flex items-center justify-center px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
        //                         LET’S TALK
        //                     </button>
        //                 </div>

        //                 <div class="fontTheGirlNextDoor text-base font-normal leading-7 tracking-tight text-left">
        //                     We get <br />booked fast🔥
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>

//     <div className="relative h-screen">
//     <div className="absolute inset-0 bg-white"></div>
//     <div
//         className="absolute inset-0 bg-cover bg-center opacity-50"
//         style={{ backgroundImage: "url('images/background.png')" }}
//     ></div>

//     <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
//         <div className="text-center">
//             {/* Subtitle */}
//             <div className="fontMontserrat text-sm md:text-base font-normal leading-6 tracking-wide">
//                 PEOPLE - CENTERED DESIGN 😎
//             </div>

//             {/* Title */}
//             <div className="fontExo font-extrabold text-3xl md:text-7xl leading-[2.5rem] md:leading-[75px] text-center tracking-wider uppercase text-customBlue mt-7">
//                 We Transform Your Business<br />
//                 <span className="lowercase text-black">
//                     through custom software  <br /> solutions.
//                 </span>
//             </div>

//             {/* Description */}
//             <div className="fontMontserrat text-center text-sm md:text-lg font-normal leading-5 md:leading-7 tracking-wide mt-7">
//                 We take responsibility of your vision as our duty and <br /> create your tomorrow. Today.
//             </div>

//             <div className="flex flex-col md:flex-row items-center justify-center mt-7">
//                 <button className="flex items-center justify-center px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
//                     LET’S TALK
//                 </button>
//                 <div className="fontTheGirlNextDoor text-sm md:text-base font-normal leading-7 tracking-wide text-left">
//                     We get <br />booked fast🔥
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>