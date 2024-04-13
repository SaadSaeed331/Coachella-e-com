import React from 'react'


const Cybersneaker = () => {
  return (
    <>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-[70px] w-[90%] mx-auto gap-4'>
            <div className='cursor-pointer overflow-hidden'>
                <img className='hover:scale-110 transition-all duration-700' src='https://minimog-4437.kxcdn.com/robust/wp-content/uploads/sites/7/2022/11/coachella-pack-1.jpg' alt="" />
            </div>
            <div className='cursor-pointer overflow-hidden'>
                <img className='hover:scale-110 transition-all duration-700' src='https://minimog-4437.kxcdn.com/robust/wp-content/uploads/sites/7/2022/11/coachella-pack-2.jpg' alt="" />
            </div>
        </div>
    </>
  )
}

export default Cybersneaker