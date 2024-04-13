import React, { useState } from 'react'
import Nav1 from "./Nav1"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Data from '../Data'

const Item = () => {
  let { array } = useSelector((state) => state.main)
  const dispatch = useDispatch()

  const [quantity,setquanttiy]= useState(1)

  const { id } = useParams()

  const openitem = Data[id]

  const addtocart = (e) => {
    openitem.qnty= quantity
    dispatch({ type: "addtocart", data: e ,})
    console.log(e);

  }
  const addqnty = (e) => {
    setquanttiy(quantity + 1)
  }

  const removeqnty = (e) => {
    setquanttiy(quantity - 1)
  }
  return (
    <>
      <Nav1 />
      <div className="main flex pl-[6%] pr-[6%]">


        <>
          <div className="left flex w-[50%]">
            <div className="side-imgs w-[12%]">
              <img className='hover:border border-black mt-2' src={openitem.mainimg} alt="" />
              <img className='hover:border border-black mt-2' src={openitem.hoverimg} alt="" />
              <img className='hover:border border-black mt-2' src={openitem.img2} alt="" />
              <img className='hover:border border-black mt-2' src={openitem.img3} alt="" />
            </div>
            <div className="m-img w-[79%] ml-2">
              <img className='w-full ' src={openitem.mainimg} alt="" />
            </div>
          </div>
          <div className="right-side w-[50%] pl-[5%]">
            {/* item-name */}
            <div className="border border-black bg-[rgb(255,122,21)] w-max px-2 py-1 rounded-lg">-34%</div>
            <div className="text-black  flex justify-between">
              <p className='text-3xl'>{openitem.prdt_name}</p>
              <div className="border rounded-full px-2 py-1">
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            {/* price */}
            <div className="text-black  my-5 flex justify-between">
              <p className='text-2xl'><span className='line-through text-gray-500'>${openitem.price}.00</span><span className='text-[rgb(255,122,21)]'>${openitem.disc_price}.00</span></p>
              <div className=" flex ">
                <div className="stars text-gray-400">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p>( 0 reveiws )</p>
              </div>
            </div>
            {/* colors */}
            <div className="colors  my-3">
              <p>Color:</p>
              <div className="flex">
                {
                  openitem.color.map((e, i) => {
                    return (
                      <div style={{ backgroundColor: e }} className={`rounded-full p-5 w-max ml-2`}></div>

                    )
                  })
                }
              </div>
            </div>

            {/* size */}

            <div className="size">
              <p>size:</p>
              <div className="flex text-xl mt-2">
                {
                  openitem.size.map((e, i) => {
                    return (

                      <div className="border px-3 py-2 ml-1 rounded-md">{e}</div>

                    )
                  })
                }
              </div>
            </div>

            {/* quntity, + buttons */}

            <div className="">
              <p>Quntity:</p>
              <div className="flex">
                <button onClick={ removeqnty} className='bg-gray-200 px-3 py-1 text-2xl rounded-l-md'>-</button>
                <p className='px-4 py-1 text-xl bg-gray-200'>{quantity}</p>
                <button onClick={ addqnty} className='bg-gray-200 px-3 py-1 text-2xl rounded-r-md'>+</button>
                <button onClick={() => addtocart(openitem)} className="border border-black w-full ml-2 rounded-md duration-300 hover:bg-black hover:text-white">ADD TO CART</button>
              </div>
              <button className="border border-black w-full  mt-2 py-2 rounded-md duration-300 hover:bg-black hover:text-white">BUY NOW</button>
            </div>





          </div>

        </>



      </div>
    </>
  )
}

export default Item