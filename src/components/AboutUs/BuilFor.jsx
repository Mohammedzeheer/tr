import React from 'react';

function BuiltFor() {
    return (
        <div className="relative flex md:h-[660px]">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 w-full md:h-auto"
                style={{
                    backgroundImage: "url('images/background.png')"
                }}
            ></div>

            <div className="relative z-10 text-left py-[50px] pl-[32px] md:pl-[64px] md:pt-[80px]">
                <div className="font-Montserrat text-sm text-customBlueishBlack md:text-2xl font-normal leading-[33.6px] tracking-[5%] pb-3">
                    We are Techrenders 🔥❤️
                </div>

                <div className="font-Exo text-left font-extrabold text-3xl md:text-[63px] leading-[2.5rem] md:leading-[89.6px] text-customBlueishBlack max-w-[300px] md:max-w-[1000px]">
                    Built for modern founders who want to make waves.
                </div>

                <div className="text-left mt-7">
                    <button className="relative inline-flex items-center font-Montserrat md:my-1 pl-6 pr-[70px] py-4 font-bold text-xl leading-normal leading-trim text-white uppercase tracking-wide bg-customBlue rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
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

                <img
                    src="/images/chair.png"
                    alt="chair"
                    className="absolute w-96 h-112 right-3 md:top-[220px] md:pb-20 hidden lg:block"
                />
            </div>
        </div>
    );
}

export default BuiltFor;
