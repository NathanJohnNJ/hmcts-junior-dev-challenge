import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Title (props){
  const current = useLocation();
  console.log(current);
  useEffect(() => {
    document.getElementById('')
  })
  return (
    <div  className="absolute left-50 top-10 flex justify-center items-center self-center justify-self-center w-full -translate-x-50">
      <h1 id="title" className="my-text text-5xl font-black font-stretch-115% flex self-center justify-self-center py-4 -mt-4">
        {/* {props.title} */}
      </h1>
    </div>
  )
}