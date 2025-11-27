import React from 'react';
import { Outlet } from "react-router-dom"
import Title from '../components/title';
export default function Root(){

  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="HMCTS - Junior Web Developer Application" />
      <Title title="Task Management Tool" />
      <Outlet />
    </div>
  )
}