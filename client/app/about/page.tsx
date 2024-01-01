"use client"

import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import About from "./About"
import Footer from '../components/Footer'

type Props = {}

const Page = (props: Props) => {
    const [open,setOpen]=useState(false);
    const [activeItem,setActiveItem]=useState(5)
    const [route,setRoute]=useState("Login")
    const {user}=useSelector((state:any)=>state.auth)
  return (
    <div>
        <Heading
            title="About us- Elearning"
            description="Elearning is a learning management system for helping programmers."
            keywords="programming,mern"
        
        />
        <Header
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            route={route}
            setRoute={setRoute}



        />
        <About/>
        <Footer/>


    </div>
  )
}

export default Page