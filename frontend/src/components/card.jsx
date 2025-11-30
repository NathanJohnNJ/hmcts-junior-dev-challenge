import React, { useState } from 'react';
import { FcDeleteRow, FcCheckmark, FcCancel } from "react-icons/fc";

export default function Card({children}){
  const [title, setTitle] = useState('Title...');
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('complete');
  const [dueDate, setDueDate] = useState(new Date().toString());
  const [showMessage, setShowMessage] = useState(false);

  function saveHandler() {
    setOpen(false);
  }

  return (
    <div className="">
      <form className="flex flex-col">
        <label htmlFor='title' className="font-black text-xl flex items-center">Title<input className="mx-4 font-medium text-lg text-slate-600" name="title" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input></label>
        <div className="flex flex-col">
        <label htmlFor='description' className="font-black text-xl flex items-start">Description
        <input type="checkbox" className="mx-4 mt-2 font-medium text-lg text-slate-600" name="descriptionCheck" id="descriptionCheck" value={showDescription} onChange={() => setShowDescription(!showDescription)}></input></label>
        {showDescription &&
          <textarea className="mx-4 font-medium text-lg text-slate-600" name="description" id="description" type="textbox" rows="5" cols="30" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        }
        </div>
        <label htmlFor='status' className="font-black text-xl flex items-center">Status
          <div className="group rounded-xl scale-85" role="group">
            <button type="button" className={status == 'notstarted' ? "rounded-l-xl bg-red-700/70 hover:bg-red-700 text-white font-bold transition-all scale-105 px-2 py-1" : "rounded-l-xl bg-red-700/50 hover:bg-red-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="notstarted" onClick={e => setStatus('notstarted')}>Not started</button>
            <button type="button" className={status == 'ongoing' ? " bg-amber-700/70 hover:bg-amber-700 text-white font-bold transition-all scale-105 px-2 py-1" : " bg-amber-700/50 hover:bg-amber-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="ongoing" onClick={e => setStatus('ongoing')}>On-going</button>
            <button type="button" className={status == 'complete' ? "rounded-r-xl bg-green-700 text-white font-bold transition-all scale-105 px-2 py-1" : "rounded-r-xl bg-green-700/50 hover:bg-green-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="complete" onClick={e => setStatus('complete')}>Complete</button>
          </div>
        </label>
        <label htmlFor='dueDate' className="font-black text-xl flex items-center">DueDate<input className="mx-4 font-medium text-lg text-slate-600" name="dueDate" id="dueDate" type="text" value={dueDate} onChange={e => setDueDate(e.target.value)}></input></label>
        <div className="flex items-center justify-evenly">
          <button className="rounded-xl shadow-2xl hover:scale-110 scale-50 transition-all duration-100" onClick={saveHandler} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCheckmark className="p-0 m-8 h-20 w-20" />
          </button>
          <button className="rounded-xl shadow-2xl hover:scale-110 scale-50 transition-all duration-100" onClick={() => setOpen(false)} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCancel className="p-0 m-8 h-20 w-20" />
          </button>
        </div>
      </form>
    </div>
  )
}