import React, { useState } from 'react'
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import rudra from '../../assets/review/rudra.png'
import palash from '../../assets/review/palash.png'
import deba from '../../assets/review/deba.png'
import sarthak from '../../assets/review/sarthak.png'
import vedant from '../../assets/review/vedant.png'
import shruti from '../../assets/review/shruti.png'

function Card2Item() {

    const imageArr = [shruti, rudra, palash, vedant, deba, sarthak];

    const reviewObj = {
        
        p1 :{
        name:'Shruti',
        review : 'Pradip was instrumental in bringing our college project to life. His leadership and technical expertise were impressive, especially in coordinating the team and ensuring timely progress. He has a natural ability to inspire others and foster collaboration. '
        },
        p2 :{
        name:'Rudranath',
        review : "Pradip's creativity truly shined during our design-focused project. His keen eye for detail and understanding of user experience were evident in every aspect of the project. He brought fresh ideas to the table, balancing aesthetics with functionality perfectly."
        },
        p3 :{
        name:'Palash',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach.'
        },
        p4 :{
        name:'Vedant',
        review : 'Working with Pradip on a time-sensitive project was a great experience. His calm demeanor under pressure and ability to manage tight deadlines without compromising quality were commendable.'
        },
        p5 :{
        name:'Debanjan',
        review : 'It was a pleasure to have Pradip on our team during college projects. From requirement analysis to development, making necessary adjustments, and handling documentation, his contributions were invaluable. '
        },
        p6 :{
        name:'Sarthak',
        review : 'Pradip stood out as an integral member of our team during college projects. His attention to detail, especially in refining project requirements, development execution, and precise documentation, was outstanding.'
        }
    }

    const key = Object.keys(reviewObj);


    const [curr, setCurr] = useState(0);

    const prev = ()=>{
        setCurr(curr => curr === 0 ? key.length-1 : curr - 1);
    }
    const next = ()=>{
        setCurr(curr => curr === key.length-1 ? 0 : curr + 1);
    }




  return (
    <div className='flex w-full h-full relative'>

 
        <FaChevronLeft onClick={prev} className='absolute text-[2rem] top-[45%] rounded-full shadow bg-zinc-600 p-2 cursor-pointer z-50 left-[2%] hover:bg-zinc-400 transition-all ease-in duration-300 hover:p-1'/>

        <FaAngleRight onClick={next} className='absolute text-[2rem] top-[45%] right-[2%] rounded-full shadow bg-zinc-600 p-2 cursor-pointer z-50 hover:bg-zinc-400 transition-all ease-in duration-300 hover:p-1'/>



  
        {key.map((item, index)=> 
            
            
            <div key={index} className='h-full lg:px-2 flex
            transition-transform ease-out duration-1000' 
            style={{transform:`translateX(-${curr*100}%)`}}>


                <div key={index} className='w-[90vw] lg:w-[25rem] flex flex-col justify-center items-center gap-4 text-center px-10 pb-10'>

                    <img className='w-20 h-20 rounded-full' src={imageArr[index]}/>

                    <p className='text-2xl text-slate-300'>{reviewObj[key[index]].name}</p>
                    <p className='text-sm text-slate-400 font-light'>{reviewObj[key[index]].review}</p>
                </div>
            </div>      
        )}


        <div className='absolute bottom-4 right-[41%]'>
            <div className='flex items-center justify-center gap-1'>
                {key.map((item, index)=>
                    <div key={index} className={`mb-2 transition-all ease-out duration-500 bg-slate-100 rounded-full w-2 h-2 ${index == curr ? 'p-1' : 'bg-opacity-20'}`}>

                    </div>
                )}
            </div>
        </div>

    </div>
  )
}

export default Card2Item;