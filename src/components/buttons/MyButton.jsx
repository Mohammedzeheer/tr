import React from 'react';

function MyButton() {

  const images = [
    { src: "/images/girl1.png", alt: "Image 1" },
    { src: "/images/girl2.png", alt: "Image 2" },
    { src: "/images/boy1.png", alt: "Image 3" }
  ];


  return (
    <button className="relative inline-flex items-center fontMontserrat md:my-1 pl-6 pr-[70px] py-4 font-bold text-xl leading-normal leading-trim text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
      LET’S TALK

      <div className="absolute right-0 top-0 bottom-0 flex items-center pr-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-[18px] h-[18px] rounded-full bg-white ml-${index !== 0 ? '[-7px]' : '0'}`}
          />
        ))}
      </div>
    </button>
  );
}

export default MyButton;
