import React from 'react'
import s3img1 from "../images/loafers.webp"
import s3img2 from "../images/high-heels.webp"
import s3img3 from "../images/boots.webp"

const Sec3 = () => {
  return (
    <>
    
    <div className="main  w-[93%] ml-[3.5%] mt-[10vh]">

          <div className="head-div flex justify-between">
            <div className='heading'>
              <p className='text-[2.2rem]'>Popular Collections</p>
              <p className='text-[1rem] text-gray-500'>Save on all best selling and exclusive styles</p>
            </div>
            <div></div>
          </div>
          <div className="border-t mt-[30px]"></div>
          <div className="product-parent mt-[30px] flex justify-between">
            <div className="c1 w-[32.5%] relative overflow-hidden">
              <img className='s3-img duration-500' src={s3img1} alt="" />
              <div className="absolute flex justify-between items-center w-[80%] top-[88%] left-[10%]">
                <p className='text-[1.8rem] font-semibold text-white'>Loafers</p>
                <p className='text-[1rem] text-white'>1 ITEM</p>
              </div>
            </div>

            <div className="c1 w-[32.5%] relative overflow-hidden">
              <img className='s3-img duration-500' src={s3img2} alt="" />
              <div className="absolute flex justify-between items-center w-[80%] top-[88%] left-[10%]">
                <p className='text-[1.8rem] font-semibold text-white'>High Heels</p>
                <p className='text-[1rem] text-white'>3 ITEMS</p>
              </div>
            </div>

            <div className="c1 w-[32.5%] relative overflow-hidden">
              <img className='s3-img duration-500' src={s3img3} alt="" />
              <div className="absolute flex justify-between items-center w-[80%] top-[88%] left-[10%]">
                <p className='text-[1.8rem] font-semibold text-white'>Boots</p>
                <p className='text-[1rem] text-white'>6 ITEMS</p>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Sec3