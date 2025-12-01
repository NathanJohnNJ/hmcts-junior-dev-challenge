import React from 'react';
 
export default function Tile(props){
  const { task } = props;

  return (
    <div className="w-22dvw border-2 rounded-xl shadow-2xl" style={{ borderColor: task.status === 'new' ? 'oklch(0.5 0.134 242.749)' : task.status === 'ongoing' ? 'oklch(0.555 0.163 48.998)' : task.status === 'completed' ? 'oklch(0.527 0.154 150.069)' : 'oklch(0.505 0.213 27.518)' }}>
    </div>
  )
}