import React, { Suspense } from 'react';

const images = [
    {
      id: 1,
      src: '/images/breifing.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/images/documentation.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: '/images/wireframe.png',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: '/images/development.png',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: '/images/quality.png',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: '/images/deployment.png',
      alt: 'Image 6',
    },
];

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-auto" />
);

const LazyLoadedImage = ({ src, alt }) => {
  const ImageComponent = React.lazy(() => import(`./${src}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageComponent alt={alt} />
    </Suspense>
  );
};

function Component6() {
  return (
    <>
      <p className="fontMontserratBold text-customBlue text-4xl sm:text-6xl font-black leading-77 tracking-7 text-left pl-9 md:pl-[64px]">
        How <br/> <span className='text-customBlueishBlack'>do we make it?  </span>
      </p>

      <div className="flex flex-wrap justify-center m-8 sm:m-16">
        {images.map((image) => (
          <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
            <LazyLoadedImage src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Component6;























// import React from 'react'

// function Component6() {

//     const images = [
//         {
//           id: 1,
//           src: '/images/breifing.png',
//           alt: 'Image 1',
//         },
//         {
//           id: 2,
//           src: '/images/documentation.png',
//           alt: 'Image 2',
//         },
//         {
//           id: 3,
//           src: '/images/wireframe.png',
//           alt: 'Image 3',
//         },
//         {
//           id: 4,
//           src: '/images/development.png',
//           alt: 'Image 4',
//         },
//         {
//           id: 5,
//           src: '/images/quality.png',
//           alt: 'Image 5',
//         },
//         {
//           id: 6,
//           src: '/images/deployment.png',
//           alt: 'Image 6',
//         },
//       ];
    
      
//   return (
//     <>
//     {/* <p className="txtMontserrat text-customBlue text-4xl sm:text-6xl font-extrabold leading-77 tracking-tighter text-left pl-9 md:pl-[64px]">
//       How <br/> <span className='text-customBlueishBlack'> do we make it?  </span>
//     </p> */}

//     <p className="fontMontserratBold text-customBlue text-4xl sm:text-6xl font-black leading-77 tracking-7 text-left pl-9 md:pl-[64px]">
//       How <br/> <span className='text-customBlueishBlack'> do we make it?  </span>
//     </p>

//       <div className="flex flex-wrap justify-center m-8 sm:m-16">
//         {images.map((image) => (
//            <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
        
//           {/* <div key={image.id} className="w-full md:w-1/3 lg:w-1/3 p-2"> */}
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-auto"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Component6