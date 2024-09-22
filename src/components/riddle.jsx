import React, { useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Lottie from 'lottie-react'
import LoadingAnimation from './json/loading.json'

function Riddle() {

    const [riddle, setRiddle] = useState(" ");
    const [answer, setAnswer] = useState(" ");
    const [isVisible, setVisibility] = useState(false);
    const [isFetching, setFetching] = useState(false);
    const [canFetch, setCanFetch] = useState(true);

    const apiKey = "W5mSOnDxwdoGHNv1XsN/ig==c5kTdLTjXsAVUOHB";
    

    const FetchQuote = async()=>{
        try{
            setFetching(true);
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
        setFetching(false);
    }


    const handleCLick = ()=>{
        if(canFetch){
            FetchQuote();
            setVisibility(false);
            setRiddle('');
        }
        setCanFetch(false);
        setTimeout(()=>{
            setCanFetch(true);
        }, 10000);      
    }


    const showAnswer = ()=>{
        setVisibility(true);
    }


    

  return (
    <div className='flex flex-col gap-4 px-6 justify-center items-center'>

            <div onClick={handleCLick} className={`px-10 mt-6 py-2 lg:py-4  w-full rounded-md text-center  transition-all ease-in-out duration-500 select-none ${canFetch ? "bg-slate-300 hover:tracking-wider active:bg-slate-400 cursor-pointer" : "bg-slate-500"}`}>Click here to get a riddle</div>

            <Lottie className={`absolute ${isFetching ? "block" : "hidden"}`} animationData={LoadingAnimation} loop={true}/>

            <div  className='w-full h-[18vh] px-2 lg:px-4 rounded-md flex justify-center items-center overflow-scroll text-sm lg:text-lg'>
                <p  className='text-slate-300 text-center'>{riddle}</p>
                
            </div>


            <div className='text-slate-400 text-sm lg:text-lg w-full h-[8vh] lg:px-4 p-4 rounded-md flex justify-center items-center overflow-scroll'>
                <p className='text-center'>{isVisible ? answer : null}</p>
            </div>


            <div onClick={showAnswer} className='text-slate-400 flex justify-center items-center hover:text-slate-200 transition-all ease-in duration-200 cursor-pointer active:text-slate-400 select-none mb-6'>
                <p>Show Answer</p>
                <MdKeyboardDoubleArrowUp className='text-3xl'/>
            </div>
    </div>
  )
}   

export default Riddle;