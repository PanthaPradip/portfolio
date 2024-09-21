import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center px-32 gap-5'>

        <div className="container1 w-1/2 h-[50vh]">
            <div className="card1 rounded-xl w-full h-full bg-[#004d43]">

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