import React from 'react'

function component6() {
    return (
        <div className="relative min-h-screen flex">
            <div className="absolute inset-0 bg-white"></div>
            {/* <div
                className="absolute inset-0 bg-cover bg-center opacity-35 md:w-[1272px] md:h-[660px]"
                style={{ backgroundImage: "url('images/background.png')" }}
            ></div> */}

<div
    className="absolute inset-0 bg-cover bg-center opacity-35 w-98 h-auto"
    style={{
        backgroundImage: "url('images/background.png')"
    }}
></div>


            <div className="relative z-10 text-left pl-[64px] pt-[128px]">
                {/* Subtitle */}
                <div className="fontMontserrat text-sm text-customBlueishBlack md:text-2xl font-normal leading-[33.6px] tracking-[4%]">
                    We are Techrenders 🔥❤️

                </div>

                {/* Title */}
                {/* <div className="fontExo text-left font-extrabold text-3xl md:text-[72px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%]  text-customBlueishBlack">
                    Built for modern founders who <br />
                        want to make waves.
                </div> */}

                <div class="fontExo text-left font-extrabold text-3xl md:text-[72px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] text-customBlueishBlack whitespace-normal">
    Built for modern founders who  
    <br className="hidden md:inline" />
    <span className='pl-1'>want to make waves.</span> 
</div>

                                                                               
               {/* button */}
                <div className="text-left mt-7">
                    <button className="relative inline-flex items-center fontMontserrat md:my-1 pl-6 pr-[70px] py-4  font-bold text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
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
                                className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px]" 
                            />
                            <img
                                src="images/girl1.jpg"
                                alt="Image 3"
                                className="w-[18px] h-[18px] rounded-full bg-white ml-[-7px]" 
                            />
                        </div>
                    </button>
                </div>


              {/* Image */}
                   {/* <img
                    src="/images/chair.png"
                    alt="chair"
                    className="absolute w-96 h-112 md:top-[227px] md:left-[738px] p-10"
                /> */}

              {/* <img
                    src="/images/chair.png"
                    alt="chair"
                    className="absolute w-[80%] md:w-96 h-auto md:h-112 md:top-[227px] md:left-[738px] p-10"
                /> */}
<img
    src="/images/chair.png"
    alt="chair"
    className="absolute w-96 h-112 md:top-[227px] md:left-[738px] p-10 hidden md:block"
/>



            </div>
        </div>

    )
}

export default component6