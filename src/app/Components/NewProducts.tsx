import React from 'react'
import ProductCard from './ProductCard';
import Image from 'next/image';


const productsData = [
    {
        img: "/pic13.jfif",
        title: "Women Dress",
        desc: "One of the bestest dress for women",
        rating: 1,
        price: "20",
    },
    {
      img: "/pic8.jfif",
      title: "Women Dress",
      desc: "One of the bestest dress for women",
      rating: 1,
      price: "15",
  },
  {
    img: "/pic9.jfif",
    title: "Women Dress",
    desc: "One of the bestest dress for women",
    rating: 1,
    price: "12",
},
{
  img: "/pic10.jfif",
  title: "Women Dress",
  desc: "One of the bestest dress for women",
  rating: 1,
  price: "25",
},
{
  img: "/pic11.jfif",
  title: "Women Dress",
  desc: "One of the bestest dress for women",
  rating: 1,
  price: "22",
},
{
  img: "/pic12.jfif",
  title: "Women Dress",
  desc: "One of the bestest dress for women",
  rating: 1,
  price: "10",
},
{
  img: "/pic13.jfif",
  title: "Women Dress",
  desc: "One of the bestest dress for women",
  rating: 1,
  price: "20",
},
{
  img: "/pic8.jfif",
  title: "Women Dress",
  desc: "One of the bestest dress for women",
  rating: 1,
  price: "25",
},
   
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16 ">
        <h2 className=" font-bold text-4xl pb-4 text-center">
            New Products
        </h2>
        <br />
    <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

     {productsData.map((item, index) => 
     <ProductCard
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        rating={item.rating}
        price={item.price}
     />)}

    </div>

      </div>
    </div>
  )
}

export default NewProducts
