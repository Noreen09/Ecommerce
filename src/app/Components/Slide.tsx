import React from 'react';
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="flex-1 p-4 bg-[#ffffffa2] sm:bg-transparent rounded-lg sm:rounded-none">
        <h3 className='text-blackish text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-[#965726] text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>
        <h3 className="text-[24px] text-gray-500">
          Starting at <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
        </h3>
        <div className="bg-[#965726] text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>

      <div className="relative flex-1 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"> 
        <Image
          className="w-full h-full rounded-xl object-cover" 
          src={img}
          alt="banner"
          layout="fill"
          objectFit="cover" 
        />
      </div>
    </section>
  );
};

export default Slide;
