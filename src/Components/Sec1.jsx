import React from 'react'
import s1img1 from "../images/hero-image.webp"
const Sec1 = () => {
  return (
    <>
    
    <div className="sec-main h-[100vh] w-[93%] p-2 m-auto flex justify-between">
            <div className="left-img w-[49.5%]">
                <img src={s1img1} alt="" />
            </div>
            <div className="right-head bg-[rgb(237,245,233)] w-[49.5%] flex flex-col items-center">
                <h1 className='text-[2rem] mt-[60px] tracking-[0.5rem]'>FLASH SALE</h1>
                <h2 className='text-[10rem] mt-[-20px] p-0'>-70%</h2>
                <p className='mt-[-20px] text-center'>Great deals for 
                black friday. Hurry up <br /> and get your beauty products</p>
                <button className='text-md border border-black py-2 px-5 mt-14'>SHOP THE SALES</button>
            </div>
        </div>
    
    </>
  )
}

export default Sec1