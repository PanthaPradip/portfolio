import React, { useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


function Riddle() {

    const [riddle, setRiddle] = useState(" ");
    const [answer, setAnswer] = useState(" ");
    const [isVisible, setVisibility] = useState(false);

    const apiKey = "W5mSOnDxwdoGHNv1XsN/ig==c5kTdLTjXsAVUOHB";
    

    const FetchQuote = async()=>{
        try{
            const raw = await fetch('https://api.api-ninjas.com/v1/riddles',
                {headers : { 'X-Api-Key': apiKey}}
            );
            const data = await raw.json();

            if(data) {
                setRiddle(data[0].question);
                setAnswer(data[0].answer);
            }
        } 
        catch(e){
            console.log("Error Fetching Quote",e);
        }
    }


    const handleCLick = ()=>{
        FetchQuote();
        setVisibility(false);
    }

    const showAnswer = ()=>{
        setVisibility(true);
    }


    

  return (
    <div className='flex flex-col gap-4 px-6 justify-center items-center'>

            <div onClick={handleCLick} className='px-10 mt-6 py-4 bg-slate-300 w-full rounded-md active:bg-slate-400 cursor-pointer text-center hover:tracking-wider transition-all ease-in-out duration-500 select-none'>Click here to get a riddle</div>

            <div  className='w-full h-[18vh] px-10 rounded-md flex justify-center items-center overflow-scroll'>
                <p  className='text-slate-300 text-center'>{riddle}</p>
                
            </div>


            <div className='text-slate-400 w-full h-[8vh] px-10 p-4 rounded-md flex justify-center items-center overflow-scroll'>
                <p className='text-center'>{isVisible ? answer : null}</p>
            </div>


            <div onClick={showAnswer} className='text-slate-400 flex justify-center items-center hover:text-slate-200 transition-all ease-in duration-200 cursor-pointer active:text-slate-400 select-none'>
                <p>Show Answer</p>
                <MdKeyboardDoubleArrowUp className='text-3xl'/>
            </div>
    </div>
  )
}   

export default Riddle;