import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Heading from '../components/heading';
import Tile from '../components/tile';
import { FcAddRow, FcDeleteRow, FcCheckmark, FcCancel } from "react-icons/fc";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('Title...');
  const [description, setDescription] = useState('(optional)...');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState(new Date.now());
  const [showMessage, setShowMessage] = useState(false);
  let tasks = [];

  function saveHandler(){

    setOpen(false);
  }
   
  return (
    <div className="h-screen w-screen p-10 flex flex-col items-center justify-center">
      <div className="relative h-fit w-full p-4 flex flex-col self-center place-self-center justify-center items-center mt-20 min-h-[75dvh]">
        <button class="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={()=>setOpen(true)} style={{display: open ? hidden : flex}}>
          <FcAddRow class="p-4 m-8 h-20 w-20"/>
        </button>
        <div style={{ display: open ? flex : hidden }}>
          <form>
            <label htmlFor='title' class="font-black text-xl">Title<input name="title" id="title" type="text" value={title} onChange={e =>setTitle(e.target.value)}></input></label>
            <label htmlFor='description' class="font-black text-xl">Description<input name="description" id="description" type="text" value={description} onChange={e => setDescription(e.target.value)}></input></label>
            <label htmlFor='status' class="font-black text-xl">Status<input name="status" id="status" type="text" value={status} onChange={e => setStatus(e.target.value)}></input></label>
            <label htmlFor='dueDate' class="font-black text-xl">DueDate<input name="dueDate" id="dueDate" type="text" value={dueDate} onChange={e => setDueDate(e.target.value)}></input></label>
            <div class="flex items-center justify-evenly">
              <button class="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={saveHandler} style={{ display: open ? hidden : flex }}>
                <FcCheckmark class="p-4 m-8 h-20 w-20" />
              </button>
              <button class="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={() => setOpen(false)} style={{ display: open ? hidden : flex }}>
                <FcCancel class="p-4 m-8 h-20 w-20" />
              </button>
            </div>
          </form>
        </div>
        {tasks &&
          <>
          
          </>
        }
      </div>
    
    </div>
  )
}