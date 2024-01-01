import { styles } from '@/app/styles/style'
import { useEditLayoutMutation, useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import React,{FC} from 'react'
import { useState,useEffect } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import Link from "next/link"
import Image from "next/image";
import {BiSearch} from "react-icons/bi";
import toast from 'react-hot-toast'

type Props = {}

const EditHero:FC<Props> = (props: Props) => {
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [subTitle,setSubTitle]=useState("")
    const {data,refetch}=useGetHeroDataQuery("Banner",{
        refetchOnMountOrArgChange:true,
    })
    const [editLayout,{isLoading,isSuccess,error}]=useEditLayoutMutation()
    useEffect(()=>{
        if(data){
            setTitle(data?.layout?.banner.title);
            setSubTitle(data?.layout?.banner.subTitle);
            setImage(data?.layout?.banner?.image?.url);
        }
        if(isSuccess){
            refetch()
            toast.success("Hero updated succesfully!")
        }
        if(error){
            if("data" in error){
                const errorData=error as any;
                toast.error(errorData?.data?.message)
            }
        }

    },[data,isSuccess,error])

    const handleUpdate=(e:any)=>{
        const file=e.target.files?.[0];
        if(file){
            const reader=new FileReader();
            reader.onload=(e:any)=>{
                if(reader.readyState===2){
                    setImage(e.target.result as string)
                }
            };
            reader.readAsDataURL(file)
        }


    }
    const handleEdit=async()=>{
        await editLayout({
            type:"Banner",
            image,
            title,
            subTitle
        })
    }
  return (
    <div className="w-full h-full 1000px:flex items-center dark:bg-black">
            <div className="top-[80px] flex justify-center align-center items-center hero_animation w-full h-full absolute  dark:bg-black">
                <div className="relative rounded-full bg-[#047857] z-10 1000px:pt-[70] justify-end items-center 1000px:w-[350px] flex 1000px:h-[350px]">
                    <Image
                        src={require("../../../../public/assets/banner-img-1.png")}
                        alt=""
                        className="z-[10] h-[auto] 1500px:max-w-[85%] object-contain 1100px:max-w-[90%] w-[90%]"
                    />
                    <input
                    type="file"
                    name=""
                    id="banner"
                    onChange={handleUpdate}
                    className='hidden'
                    
                    
                    />
                    <label htmlFor="banner" className='absolute bottom-0 right-10 z-20'>
                        <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer"/>
                    </label>
                   
                </div>
                <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-lest mt-[250px]">

                    <textarea
                        className='dark:text-white resize-none text-[#000000c7] text-[30px] px-3 bg-transparent h-[60%] w-[60%] font-Josefin font-[600]'
                        placeholder="Improve Your Online Learning Experience Better Instantly"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        rows={4}
                    >

                    </textarea>
                    <textarea
                        className='dark:text-white resize-none text-[#000000c7] px-3 bg-transparent h-[60%] w-[60%] font-Josefin font-[300] text-[18px]'
                        placeholder="We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them."
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        rows={4}
                    >

                    </textarea>



                    <div className="dark:bg-[#047857] w-[20%] h-[60%] dark:text-white text-white bg-[#cccccc34] rounded bottom-12 right-12"
                    onClick={
                        data?.layout?.banner?.title!==title || 
                        data?.layout?.banner?.subTitle!==subTitle || 
                        data?.layout?.banner?.image?.url!==image
                        ? handleEdit 
                        : ()=>null
                    
                    }
                    >
                        Save
                    </div>

                    


                </div>
            </div>
        </div>
  )
}

export default EditHero

                        // ${
                        //     data?.layout?.banner?.title!==title || 
                        //     data?.layout?.banner?.subTitle!==subTitle || 
                        //     data?.layout?.banner?.image?.url!==image 
                        //     ? "!cursor-pointer !bg-[#42d383]"
                        //     : "!cursor-not-allowed"
                        // }