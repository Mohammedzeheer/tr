import React from 'react';

const CollaborationHeader = () => {
  return (
   
    <div className='bg-customBlack1 p-10'>

    {/* <div className="fontExo text-center text-6xl font-extrabold leading-tight tracking-tighter text-white">
      READY TO KICK OFF OUR <br/> COLLABORATION?
    </div> */}

<div className=" fontExo font-extrabold text-3xl md:text-7xl leading-[2.5rem] md:leading-[75px] text-center tracking-[-1%]  uppercase text-white mt-7">
READY TO KICK OFF OUR <br />COLLABORATION
</div>
 
{/* Description */}
<div className="fontMontserrat text-customGrey1 text-center text-sm md:text-lg font-normal leading-5 md:leading-7 tracking-wide mt-7">
We take responsibility of your vision as our duty and <br /> create your tomorrow. Today.
</div>
    </div>
   
  );
};

export default CollaborationHeader;

