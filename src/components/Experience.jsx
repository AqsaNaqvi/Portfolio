import React from 'react'
import html from '../../public/html.png'
import CSS from '../../public/CSS.jpeg'
import javaScript from '../../public/javaScript.jpeg'
import react from '../../public/react.jpeg'
import Tailwind from '../../public/Tailwind.png'
import mySql from '../../public/mySql.jpeg'



function Experience() {
    const cardItem=[
        {
            id:1,
            logo: html,
            name:'HTML'
        },
        {
            id:2,
            logo: CSS,
            name:'CSS'
        },
        {
            id:3,
            logo: javaScript,
            name:'javaScript'
        },
        {
            id:4,
            logo: react,
            name:'React'
        },
        {
            id:5,
            logo: Tailwind,
            name:'Tailwind'
        },
        {
            id:6,
            logo: mySql,
            name:'SQL'
        },
       
    ]
    return (
        <div name='Experiance' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <p className=''>I've more than 1 years of experiance in below technologies.</p>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3'>
            {
                cardItem.map(({id,logo,name})=>(
                    <div className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] md:border-[2px] cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[150px]  rounded-full' alt="" />
                        <div>
                        <div className=''>{name}</div>
                        
                        </div>
                       

                    </div>
                )) 
            }
           </div>
        </div>
    )
}

export default Experience
