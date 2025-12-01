import React from 'react';
import Tile from './tile';
import Modal from './modal';

export default function Board({ children }){

  return (
    <div className="flex items-center justify-evenly w-[75vw] sm:w-[95vw] ">
      {children}
    </div>
  )
}