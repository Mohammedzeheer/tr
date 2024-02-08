import React from 'react';

function Explore({ backgroundColor, title, description ,titleColor,descriptionColor }) {
    return (
        <div className={`bg-${backgroundColor} px-5 pt-10 md:pt-20 md:pl-14`}>

            {/* <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[550px] uppercase text-${titleColor}`}> */}
            {/* <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[550px] uppercase bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-${titleColor}`}> 
                {title}
            </div> */}
            {/* <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[550px] uppercase bg-gradient-to-r from-white to-${titleColor} bg-clip-text text-transparent`}> 
    {title}
</div> */}

{/* <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[550px] uppercase bg-gradient-to-r ${titleColor ? `from-white to-${titleColor}` : 'from-white to-black'} bg-clip-text text-transparent ${!titleColor ? 'text-black' : ''}`}>
    {title}
</div> */}

<div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[500px] bg-gradient-to-r ${titleColor ? `from-white to-${titleColor}` : 'from-customBlueishBlack to-customBlueishBlack'} bg-clip-text text-transparent text-customBlueishBlack`}>
    {title}
</div>


            {/* Description */}
            <div className={`fontMontserrat text-left text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-4 sm:mt-7 md:max-w-[678px] text-${descriptionColor}`}>
             {description}
            </div>
        </div>
    );
}

export default Explore;


