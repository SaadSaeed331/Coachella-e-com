import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Sidecart = () => {
    const { cartarray } = useSelector((state) => state.main)
    const [quantity, setquanttiy] = useState(1)
    const dispatch = useDispatch()

    const addqnty = (e) => {
        dispatch({ type: "addqnty", data:e } )
    }

    const removeqnty = (e) => {
        dispatch({ type: "removeqnty",data:e })
    }


    if (cartarray.length <= 0) {

        return (
            <div>
                <div className=" flex flex-col items-center m-auto w-[90%]">
                    <img src='https://minimog.thememove.com/robust/wp-content/themes/minimog/assets/woocommerce/empty-cart.png' alt="" className='m-auto w-[60%]' />
                    <p className='font-medium text-center mt-3'>Your cart is currently empty.</p>
                    <p className='text-center text-[1.1rem] mt-3 text-[#6b6b6b]'>You may check out all
                        the available products and buy some in the shop.</p>
                    <button className='bg-black text-white px-10 py-3 mt-5'>RETURN TO SHOP</button>
                </div>

            </div>
        )
    }
    else {
        return (

            <>
                {

                    cartarray.map((e, i) => {
                        return (
                            <>
                                <div className='px-2 py-2 flex border border-red-800'>
                                    <div className="mainimg">
                                        <img src={e.mainimg} className='w-24' alt="" />
                                    </div>
                                    <div className="details pl-3">
                                        <div className="name  font-semibold">{e.prdt_name}</div>
                                        <div className="name">Color: <span className="font-semibold"> {e.colorcart}</span> </div>
                                        <div className="name">Price: <span className='ml-2 font-semibold'>${e.disc_price}.00</span></div>
                                        <div className="flex">
                                            <button onClick={() => removeqnty(e)} className="button bg-gray-200 px-3 py-1 text-2xl rounded-l-md">-</button>
                                            <span className=' bg-gray-200 px-3 py-1 text-2xl'>{e.qnty}</span>
                                            <button onClick={() => addqnty(e)} className="button bg-gray-200 px-3 py-1 text-2xl rounded-r-md">+</button>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default Sidecart