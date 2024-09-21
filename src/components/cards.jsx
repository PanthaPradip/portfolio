import React from 'react'
import Riddle from './riddle'

function Cards() {
  return (
    <div className='w-full h-[80vh] bg-zinc-200 flex items-center px-32 gap-5 sticky top-0 z-10 pb-10'>

        <div className="container1 w-1/2 h-[50vh]">
            <div className="card1 rounded-xl w-full h-full bg-[#004d43]">
                <Riddle/>
            </div>
        </div>


        <div className="container2 flex gap-5 w-1/2 h-[50vh]">
            <div className="card2 rounded-xl w-1/2 h-full bg-[#212121]">

            </div>
            <div className="card3 rounded-xl w-1/2 h-full bg-[#212121]">

            </div>


        </div>

    </div>
  )
}

export default Cards