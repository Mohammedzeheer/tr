import React from 'react';

function ButtonWithImages() {
  return (
    <>
    <div className='m-5'>
   
    <button className=" relative inline-flex items-center fontMontserrat md:my-1 pl-6 pr-[70px] py-4  font-bold text-xl leading-normal leading-trim  text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                   
 {/* <button className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 relative"> */}
 LET’S TALK 
      {/* Images */}
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
</div>

          </>
  );
}

export default ButtonWithImages;
