import React from 'react'
import Riddle from './riddle'
import Card2Item from './Sub-components/card2item'
import Card3Item from './Sub-components/card3item'

function Cards() {
  return (
    <div className='w-full h-[80vh] bg-zinc-200 flex flex-col lg:flex-row items-center px-32 gap-5 sticky top-0 lg:-top-16 z-10 pb-10 pt-10'>

        <div className="container1 w-[90vw] lg:w-1/2 h-[50vh]">
            <div className="card1 rounded-xl w-full h-full bg-[#004d43]">
                <Riddle/>
            </div>
        </div>



        <div className="container2 flex gap-5 w-1/2 h-[50vh]">

              <div className="card2 rounded-xl w-[20vw] lg:w-full h-[40vh] lg:h-full bg-[#212121] hidden lg:block overflow-hidden">

                          {/* content for 2nd crad */}
                          <Card2Item/>

              </div>



              <div className="card3 rounded-xl w-[30vw] lg:w-1/2 h-[40vh] lg:h-full bg-[#212121] hidden lg:block overflow-hidden">

                        {/* content for 2nd crad */}
                        <Card3Item/>
              </div>
        </div>




    </div>
  )
}

export default Cards