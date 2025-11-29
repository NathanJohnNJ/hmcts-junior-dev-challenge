import React from 'react';

export default function Heading(props) {
  return (
    <div className="flex justify-center items-center self-center justify-self-center w-full text-center">
      <h1 className={`absolute left-50 top-20 blue heading-text font-black font-stretch-115% flex self-center justify-self-center py-4 -mt-4 md:text-3xl text-sm `}>
        {props.heading}
      </h1>
    </div>
  )
}
