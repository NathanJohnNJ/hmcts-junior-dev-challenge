import React from 'react';
import { Outlet } from "react-router-dom"
import Title from '../components/title';
import Heading from '../components/heading';
export default function Root(){

  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="HMCTS<br>Junior Web Developer Application" />
      <Heading title="Task Management Tool" />
      <Outlet />
    </div>
  )
}