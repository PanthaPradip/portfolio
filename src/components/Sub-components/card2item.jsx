import React, { useState } from 'react'
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

function Card2Item() {


    const reviewObj = {
        
        p1 :{
        name:'Shruti',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        },
        p2 :{
        name:'Rudranath',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        },
        p3 :{
        name:'Palash',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        },
        p4 :{
        name:'Hardik',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        },
        p5 :{
        name:'Vedant',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        },
        p6 :{
        name:'Anuj',
        review : 'Your work is a true reflection of dedication and creativity. The attention to detail and thoughtful execution shine through, making it stand out. The results speak for themselves, showcasing both your technical skills and innovative approach. Keep up the excellent work!'
        }
    }

    const key = Object.keys(reviewObj);
    const countDiv = key;

    const [curr, setCurr] = useState(0);

    const prev = ()=>{
        setCurr(curr => curr === 0 ? countDiv.length-1 : curr - 1);
    }
    const next = ()=>{
        setCurr(curr => curr === countDiv.length-1 ? 0 : curr + 1);
    }



  return (
    <div className='flex w-full h-full relative'>

 
        <FaChevronLeft onClick={prev} className='absolute text-[2rem] top-[45%] rounded-full shadow bg-zinc-600 p-2 cursor-pointer z-50 left-[2%] hover:bg-zinc-400 transition-all ease-in duration-300 hover:p-1'/>

        <FaAngleRight onClick={next} className='absolute text-[2rem] top-[45%] right-[2%] rounded-full shadow bg-zinc-600 p-2 cursor-pointer z-50 hover:bg-zinc-400 transition-all ease-in duration-300 hover:p-1'/>



  
        {countDiv.map((item, index)=> 
            
            
            <div className='h-full p-2 flex
            transition-transform ease-out duration-1000' 
            style={{transform:`translateX(-${curr*100}%)`}}>


                <div key={index} className='w-[25rem] flex flex-col justify-center items-center gap-4 text-center px-14'>

                    <img></img>

                    <p className='text-2xl text-slate-300'>{reviewObj[key[index]].name}</p>
                    <p className='text-sm text-slate-400 font-light'>{reviewObj[key[index]].review}</p>
                </div>



            </div>      
        )}

    </div>
  )
}

export default Card2Item;