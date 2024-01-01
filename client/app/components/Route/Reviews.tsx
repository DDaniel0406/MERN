import React from 'react'
import Image from 'next/image'
import { styles } from '@/app/styles/style'
import ReviewCard from "../Review/ReviewCard"

type Props = {}

export const reviews=[
    {
        name:"Gene Bates",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession:"Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem."
    },
    {
        name:"Gene Bates",
        avatar:"https://randomuser.me/api/portraits/women/2.jpg",
        profession:"Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem."
    },
    {
        name:"Gene Bates",
        avatar:"https://randomuser.me/api/portraits/men/2.jpg",
        profession:"Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem."
    },
    {
        name:"Gene Bates",
        avatar:"https://randomuser.me/api/portraits/women/2.jpg",
        profession:"Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem..Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem."
    },
    {
        name:"Gene Bates",
        avatar:"https://randomuser.me/api/portraits/women/2.jpg",
        profession:"Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem.Lorem ipsum dolor sit amet consectutur adipisicing elit.Quisquam, quidem."
    },
]

const Reviews = (props: Props) => {
  return (
    <div className='w-[90%] 800px:w-[85%] m-auto'>
        <div className='w-full 800px:flex items-center'>
            <div className='800px:w-[50%] w-full'>
                <Image
                    src={require("../../../public/assets/images.png")}
                    alt="business"
                    width={500}
                    height={500}
                    className='rounded-full object-contain'
                />
            </div>
            <div className='800px:w-[50%] w-full'>
                <h3 className={`${styles.title} 800px:!text-[40px]`}>
                    Our Studneys Are <span className='text-gradient'>Our Strength</span>{" "}
                    <br/>See What Say About Us
                </h3>
                <br/>
                <p className={styles.label}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad dolorem voluptates deserunt hic culpa. Debitis impedit quaerat minus iure rerum vero laborum voluptate tenetur, perspiciatis ut fugiat ad voluptas?

                </p>

            </div>
            <br/>
            <br/>
        </div>

        <div className='grid grid-cols-1 gap-[25px] md:grid-cols-2 mg:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid*cols-2 mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*nth-child(6):!mt-[-40px]'>
            {reviews && 
                reviews.map((i,index)=><ReviewCard item={i} key={index}/>)
            }
        </div>


    </div>
  )
}

export default Reviews
