import React, { useState } from 'react';
import { FcDeleteRow, FcCheckmark, FcCancel } from "react-icons/fc";

export default function Card({children}){
  const [title, setTitle] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');
  const [dueDate, setDueDate] = useState(new Date().toString());
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({});

  function saveHandler() {
    if (title === ''){
      setMessage({
        "message": "You must give your task a title."
      })
      setShowMessage(true);
    } else if (title === '') {
      setMessage({
        "message": "You must give your task a title."
      })
      setShowMessage(true);
    }
    setOpen(false);
  }

  return (
    <fieldset className="border-2 rounded-xl shadow-2xl py-10 px-15 mt-8 relative">
      <label className="border-2 shadow-2xl rounded-2xl px-1.5 py-0.5 absolute -top-7 left-5 bg-white text-2xl font-black">New Task</label>
      <form className="flex flex-col">
        <label htmlFor='title' className="font-black text-xl flex flex-col items-start ">Title<input className="border-2 shadow-2xl mx-4 text-center border-slate-200 dark:border-sky-50 bg-linear-60  from-slate-100/50 dark:from-sky-100/40 dark:via-sky-50/40 via-slate-50/50 via-20% to-white/30 text-lg text-slate-900 font-bold w-[35vw] rounded-xl" name="title" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input></label>
        <div className="flex flex-col">
        <label htmlFor='description' className="font-black text-xl flex items-start">Description
        <input type="checkbox" className="mx-4 mt-2 font-medium text-lg text-slate-900" name="descriptionCheck" id="descriptionCheck" value={showDescription} onChange={() => setShowDescription(!showDescription)}></input></label>
        {showDescription &&
            <textarea className="border-2 shadow-2xl mx-4 rounded-xl font-medium text-center border-slate-200 dark:border-sky-50 bg-linear-60  from-slate-100/50 dark:from-sky-100/40 dark:via-sky-50/40 via-slate-50/50 via-20% to-white/30 text-lg text-slate-900 w-[35vw] transition-all transition-discrete" name="description" id="description" type="textbox" rows="5" cols="30" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        }
        </div>
        <label htmlFor='status' className="font-black text-xl flex flex-col items-start w-[35vw]">Status
          <div className="group rounded-xl scale-85 w-[35vw] whitespace-nowrap" role="group">
            <button type="button" className={status == 'new' ? "rounded-l-xl bg-sky-700/80 hover:bg-sky-700 text-white font-bold transition-all scale-105 px-2 py-1" : "rounded-l-xl bg-sky-700/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="new" onClick={e => setStatus('new')}>New</button>
            <button type="button" className={status == 'ongoing' ? " bg-amber-700/80 hover:bg-amber-700 text-white font-bold transition-all scale-105 px-2 py-1" : " bg-amber-700/50 hover:bg-amber-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="ongoing" onClick={e => setStatus('ongoing')}>On-going</button>
            <button type="button" className={status == 'complete' ? "bg-green-700/80 text-white font-bold transition-all scale-105 px-2 py-1" : "bg-green-700/50 hover:bg-green-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="complete" onClick={e => setStatus('complete')}>Complete</button>
            <button type="button" className={status == 'overdue' ? "rounded-r-xl bg-red-700/80 hover:bg-red-700 text-white font-bold transition-all scale-105 px-2 py-1" : "rounded-r-xl bg-red-700/50 hover:bg-red-700 text-white font-medium transition-all hover:scale-105 px-2 py-1"} value="overdue" onClick={e => setStatus('overdue')}>Overdue</button>
          </div>
        </label>
        <label htmlFor='dueDate' className="font-black text-xl flex items-center">DueDate<input className="border-2 shadow-2xl rounded-xl px-2 mx-4 font-medium text-lg text-slate-600 datepicker-input" name="dueDate" id="dueDate" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}></input></label>
        <div className="flex items-center justify-evenly">
          <button className="rounded-xl shadow-2xl hover:scale-110 scale-50 transition-all duration-100" onClick={saveHandler} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCheckmark className="p-0 m-8 h-20 w-20" />
          </button>
          <button className="rounded-xl shadow-2xl hover:scale-110 scale-50 transition-all duration-100" onClick={() => setOpen(false)} style={{ display: open ? 'hidden' : 'flex' }}>
            <FcCancel className="p-0 m-8 h-20 w-20" />
          </button>
        </div>
      </form>
      { showMessage && 
        <div className={error ? 'bg-red-500 text-white font-semibold text-3xl' : 'bg-white text-slate-900 font-semibold text-3xl'}>
          {message}
        </div>
      }
    </fieldset>
  )
}