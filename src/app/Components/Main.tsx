"use client"

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const SlideData = [
    {
       id: 0,
       img: "/pic4.jfif",
       title: "Trending Items",
       mainTitle: "Men Latest Fashion Wear",
       price: "$10",
    },
    {
      id: 1,
      img: "/pic2.jfif",
      title: "Trending Items",
      mainTitle: "Women Latest Fashion Wear",
      price: "$10",
    },
    {
      id: 2,
      img: "/pic5.jfif",
      title: "Trending Items",
      mainTitle: "Women Latest Fashion Wear",
      price: "$10",
    },
  ];

  return (
    <section className="flex justify-end pr-4">
      <div className="w-full md:w-full lg:w-full">
        <Slider {...settings}>
          {SlideData.map((item) => (
            <Slide 
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Main;
