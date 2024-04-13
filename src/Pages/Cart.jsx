import React from 'react'
import Nav1 from '../Components/Nav1'
import { Link } from 'react-router-dom'
import emptycart from "../images/empty-cart.png"
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'


const Cart = () => {
    const {cartarray}= useSelector((state)=>state.main)

    let subtotal = cartarray.reduce((a,b)=>{
        return a + b.qnty * b.disc_price
    },0)
    return (
        <>
            <Nav1 />
            <h1 className='text-5xl text-center mt-6'>Cart</h1>
            <h1 className='text-xl text-center mt-2'>
                <Link to={"/"}>Home</Link>
                <i class="fa-solid fa-angle-right"></i> Cart</h1>
                {/* <img className='w-[30%] ml-[35%]' src={emptycart} alt="Cart is empty" /> */}
                <div className="px-[7%] flex flex-col">
                    <div className="headding font-bold flex">
                        <div className='ml-[]'>Product</div>
                        <div className='ml-[41%]'>Price</div>
                        <div className='ml-[10%]'>Quantity</div>
                        <div className='ml-[30%]'>Subtotal</div>
                    </div>
                    <div className="border border-t-0 mt-2"></div>
                    {/* cart items map below*/}
                    <CartItem/>
                    {/* end map */}
                    <div className="ml-[70%] w-80 rounded-lg border p-3">
                        <div className="subtotal flex justify-between">
                            <span>Subtotal</span>
                            <span className='font-bold'>{subtotal}</span>
                            </div>
                    <div className="border border-t-0 mt-2"></div>

                        <div className="delivery flex justify-between">
                        <span>Shipping</span>
                            <span className='font-bold'>10.00</span>
                        </div>
                        <div className="border border-t-0 mt-2"></div>

                        <div className="total flex justify-between">
                        <span>Total</span>
                            <span className='font-bold'>{subtotal+10}</span>
                        </div>
                    </div>

                </div>

        </>
    )
}

export default Cart