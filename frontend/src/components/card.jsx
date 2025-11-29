import React, { useState } from 'react';
import { FcDeleteRow, FcCheckmark, FcCancel } from "react-icons/fc";

export default function Card({children}){
  const [title, setTitle] = useState('Title...');
  const [description, setDescription] = useState('(optional)...');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toString());
  const [showMessage, setShowMessage] = useState(false);

  function saveHandler() {
    setOpen(false);
  }

  return (
    <div className="">
      <form className="flex flex-col">
        <label htmlFor='title' className="font-black text-xl flex">Title<input name="title" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input></label>
        <label htmlFor='description' className="font-black text-xl flex">Description<input name="description" id="description" type="text" value={description} onChange={e => setDescription(e.target.value)}></input></label>
        <label htmlFor='status' className="font-black text-xl flex">Status<input name="status" id="status" type="text" value={status} onChange={e => setStatus(e.target.value)}></input></label>
        <label htmlFor='dueDate' className="font-black text-xl flex">DueDate<input name="dueDate" id="dueDate" type="text" value={dueDate} onChange={e => setDueDate(e.target.value)}></input></label>
        <div className="flex items-center justify-evenly">
          <button className="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={saveHandler} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCheckmark className="p-4 m-8 h-20 w-20" />
          </button>
          <button className="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={() => setOpen(false)} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCancel className="p-4 m-8 h-20 w-20" />
          </button>
        </div>
      </form>
    </div>
  )
}