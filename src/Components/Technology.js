import React from 'react'

export default function Technology() {
  return (
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className='lg:ml-24 max-w-[90%] mx-auto'>
        <h3 className="text-4xl lg:text-6xl pb-20 font-semibold lg:max-w-xl pt-5">
          We believe that in a world that turns you into a number, we are able
          to use technology to deliver to you an unparalleled personalised
          service.
        </h3>
      </div>
      <div>
        <img src="/aboutus/woma.jpg" alt="women"  className='max-w-full object-cover'/>
      </div>
    </div>
  );
}
