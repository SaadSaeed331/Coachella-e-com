import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = () => {
    const { cartarray } = useSelector((state) =>  state.main )
    const dispatch = useDispatch()

    const addqnty = (e)=>{
        dispatch({type:"addqnty",data:e})
    }

    const removeqnty = (e)=>{
        dispatch({type:"removeqnty",data:e})
    }

    return (
        <>
            {cartarray.map((e, i) => {
                const discprice= e.disc_price.toFixed(2)
                
                return (
                    <>

                        <div className="headding flex p-5">
                            <div className='flex'>
                                <div className="w-[100px] h-[100px]">
                                    <img src={e.mainimg} alt="" />
                                </div>
                                <div className="ml-2 text-nowrap">
                                    <div className="itemname"><span className='font-semibold' >Name:</span>{e.prdt_name}</div>
                                    <div className="itemname"><span className='font-semibold' >Color:</span>{e.colorcart}</div>
                                    <div className="itemname"><span className='font-semibold' >Size:</span>{e.size[0]}</div>
                                    <button className="itemname font-bold">Remove</button>
                                </div>
                            </div>
                            <div className='price ml-[22%] mt-5'>${discprice}</div>
                            <div className='quantity ml-[10%] h-[7vh] border rounded-md flex'>
                                <button onClick={()=>removeqnty(e)} className="button  px-3">-</button>
                                <span className='mt-2 px-3'>{e.qnty}</span>
                                <button onClick={()=>addqnty(e)} className="button px-3">+</button>
                            </div>
                            <div className='subtotal ml-[28%]'>${discprice*e.qnty}</div>
                        </div>
                        <div className="border border-t-0 mt-2"></div>
                    </>
                )



            })}
        </>
    )
}

export default CartItem