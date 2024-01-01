import React,{FC, useState} from "react";
import {BiSearch} from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type Props={};

const Hero:FC<Props>=(props)=>{
    const {data,refetch,isLoading}=useGetHeroDataQuery("Banner",{})
    const [search,setSearch]=useState("");
    const router=useRouter()

    const handleSearch=()=>{
        if(search===""){
            return
        }else{
            router.push(`/courses?title=${search}`)
        }
    }
    return(
        <>
        {
            isLoading ? (
                <Loader/>
            ):(
                <div className="w-full min-h-screen 1000px:flex items-center dark:bg-black ">
                <div className="top-[80px] flex justify-center align-center items-center hero_animation w-full h-full absolute  dark:bg-black">
                    <div className="rounded-full bg-[#047857] z-10 1000px:pt-[70] justify-end items-center 1000px:w-[350px] flex 1000px:h-[350px]">
                        <Image
                            src={require("../../../public/assets/banner-img-1.png")}
                            width={400}
                            height={400}
                            alt=""
                            className="z-[10] h-[auto] 1500px:max-w-[85%] object-contain 1100px:max-w-[90%] w-[90%]"
                        />
                    </div>
                    <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-lest mt-[250px]">
                        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
                            {data?.layout?.banner?.title}
                        </h2>
                        <br/>
                        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
                        {data?.layout?.banner?.subTitle}
                        </p>
                        <br/>
                        <br/>
                        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                            <input                        
                                type="search"
                                placeholder="Search Courses..."
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                className="font-Josefin font-[500] text-[#0000004e] dark:text-[#ffffffe6] text-[20px] outline-none p-2 w-full h-full rounded-[5px] dark:placeholder:text-[#ffffffdd] dark:bg-[#575757] bg-transparent border dark:border-none"
                            />
                            <div className="rounded-r-[5px] bg-[#39c1f3] right-0 top-0 h-[50px] cursor-pointer w-[50px] absolute flex items-center justify-center"
                                onClick={handleSearch}
                            >
                                <BiSearch size={30} className="text-white" />
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
                           <Image
                              src={require("../../../public/assets/client-1.jpg")}
                              alt=""
                              className="rounded-full"  
                           />
                            <Image
                              src={require("../../../public/assets/client-2.jpg")}
                              alt=""
                              className="rounded-full"  
                           /> 
                            <Image
                              src={require("../../../public/assets/client-3.jpg")}
                              alt=""
                              className="rounded-full"  
                           /> 
                           <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                                500K+ People already trusted us.
                                <Link href="/courses" className="dark:text-[#46e256] text-[crimson]">View Courses</Link>
                            
                            </p>  
    
     
    
                        </div>
    
                    </div>
                </div>
            </div>
            )
        }

        </>
    )
}

export default Hero