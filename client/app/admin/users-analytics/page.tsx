"use client"
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar"
import UserAnalytics from "../../components/Admin/Analytics/UserAnalytics"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <AdminProtected>
            <Heading
                title="Elearning-Admin"
                description="ELearning is a paltform for students to learn and get help from teachers"
                keywords="Programming,MERN,Redux,Machine Learning"
            
            />
            <div className='flex h-[200vh]'>
                <div className='1500px:w-[18%] w-1/5 text-white'>
                    <AdminSidebar/>
                </div>
                <div className='1500px:w-[85%]'>
                    <DashboardHero/>
                    <UserAnalytics/>

                </div>
            </div>
        </AdminProtected>
    </div>
  )
}

export default page