import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    
    <div className="bg-white  py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl pb-4 text-center">
          Testimonials
        </h2>
        <br/>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
          {/* Testimonial Card */}
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="/pic.jfif"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                Aesthie Kim
              </h2>
              <p>CEO & Founder Invision</p>
              <Image
                className="inline-block py-2"
                src="/quotes.jfif"
                width={30}
                height={30}
                alt="quotes"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim nisi a vero, consequuntur rem. Provident repellendus ea, nesciunt repellat blanditiis sequi.
              </p>
            </div>
          </div>

          {/* Banner */}
          <div className="bg-cover h-[500px] rounded-2xl grid place-items-center" style={{ backgroundImage: 'url(/banner.jfif)' }}>
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              {/* Add any content here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
