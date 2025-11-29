import React from 'react';

export default function Title (props){
  return (
    <div  className="absolute left-50 top-10 flex justify-center items-center self-center justify-self-center w-full -translate-x-50">
      <h1 className="my-text text-4xl font-black font-stretch-115% flex self-center justify-self-center py-4 -mt-4">
        {props.firstLine}<br></br>{props.secondLine}
      </h1>
    </div>
  )
}