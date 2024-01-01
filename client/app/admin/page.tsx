"use client"
import React from 'react'
import Heading from '../utils/Heading'
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import AdminProtected from '../hooks/adminProtected'
import DashboardHero from "../components/Admin/DashboardHero"
import AllCourses from "../components/Admin/Course/AllCourses"
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
            <div className='flex h-screen'>
                <div className='1500px:w-[18%] w-1/5 text-white'>
                    <AdminSidebar/>
                </div>
                <div className='1500px:w-[85%]'>
                    <DashboardHero isDashboard={true}/>
                    {/* <AllCourses/>  */}

                </div>
            </div>
        </AdminProtected>
    </div>
  )
}

export default page