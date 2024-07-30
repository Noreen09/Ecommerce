import React from 'react'
import Link from 'next/link';
import {HiOutlineShoppingCart } from 'react-icons/hi'

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish"> Logo </div>
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
           <Link className="navbar__link relative" href="#">Home </Link>
           <Link className="navbar__link relative" href="#">Male </Link>
           <Link className="navbar__link relative" href="#">Female </Link>
           <Link className="navbar__link relative" href="#">Hot Offers </Link>
           <Link className="navbar__link relative" href="#">Contact </Link>
        </div>
        <div className="relative">
          <HiOutlineShoppingCart size={26}/>
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[15px] h-[15px] text-[10px] text-white grid place-items-center translate-x-1 -translate-x-1">
           0
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
