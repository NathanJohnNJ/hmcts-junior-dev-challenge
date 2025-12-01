import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Heading from '../components/heading';
import Tile from '../components/tile';
import Board from '../components/board';
import { FcAddRow } from "react-icons/fc";
import { getAllTasks } from '../api/tasks';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks(){
      const tasks = await getAllTasks();
      return tasks;
    }
    setTasks(getTasks())
  })
   
  return (
    <div className="h-screen w-screen p-10 flex flex-col items-center justify-center">
      <div className="relative h-fit w-full p-4 flex flex-col self-center place-self-center justify-center items-center mt-20 min-h-[75dvh]">
        <button className="rounded-xl shadow-2xl hover:scale-110 transition-all duration-100" onClick={()=>setOpen(true)} style={{display: open ? 'none' : 'flex'}}>
          <FcAddRow className="p-4 m-8 h-20 w-20"/>
        </button>
        <div style={{ display: open ? 'flex' : 'none' }}>
          <Card />
        </div>
        {tasks &&
          <Board>
          { tasks.map((task,i)=>{
            <Tile key={i} task={task} />
          })}
          </Board>
        }
      </div>
    
    </div>
  )
}