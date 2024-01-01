import React from 'react'
import DashboardHeader from "./DashboardHeader"
import { useState } from 'react'
import DashboardWidgets from "../../components/Admin/Widgets/DashboardWidgets"

type Props = {
  isDashboard?:boolean;
}

const DashboardHero = ({isDashboard}: Props) => {
  const [open,setOpen]=useState(false)
  return (
    <div className='text-white'>
        <DashboardHeader open={open} setOpen={setOpen}/>
        {
          isDashboard && (
            <DashboardWidgets open={open}/>
          )
        }
    </div>
  )
}

export default DashboardHero