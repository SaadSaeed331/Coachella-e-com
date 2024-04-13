import React, { useState } from 'react'
import dropimg1 from "../images/en-us.webp"
import dropimg2 from "../images/fr.webp"
import dropimg3 from "../images/de.webp"
import logo from "../images/dark-logo.webp"
import emptycart from "../images/empty-cart.png"
import { Link } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Sidecart from './Sidecart'


const Nav1 = () => {
    
       const [drop1,setdrop1] =useState( "hidden")
       const [sign,setsign]= useState("hidden")
       const [search,setsearch]= useState("hidden")
       const [cart,setcart1]=useState("hidden")
    

    const showdrop1 = () => {
        if (drop1 === "hidden") {
            setdrop1("visible" )
        } else {
            setdrop1('hidden')
        }
    }

    const sign1 = () => {
        if (sign === "hidden") {
            setsign("visible")
        } else {
            setsign( 'hidden' )
        }
    }

    const search1 = () => {
        if (search === "hidden") {
            setsearch( "visible")
        } else {
            setsearch('hidden' )
        }
    }

    const cartopen1 = ()=>{
        if(cart === "hidden"){
            setcart1("visible")
        }else{
            setcart1("hidden")
        }
    }

    
        return (
            <>

                <div className='flex justify-center bg-[rgb(224,231,228)]'>
                    <p className='nav-1-text py-1'>Free Delivery on orders over $200. Don’t miss discount.</p>
                </div>

                <div className="flex justify-between border py-2 px-[50px]">
                    <div className="nav2-c1 flex justify-between text-[1rem]">
                        <div><i class="fa-brands fa-instagram "></i> 100k Followers
                            <i class="fa-brands fa-facebook ml-5"></i> 300k Followers
                        </div>
                    </div>
                    <div className="nav2-c1 flex justify-between text-[1rem]">
                        <p>Open Doors To A World Of Fashion</p>
                        <div className='border border-left mx-2'></div>
                        <p className='underline'>Discover More</p>
                    </div>
                    <div className="nav2-c1">
                        <ul className='list-none flex justify-between text-[1rem]'>

                            <li className="english-drop mr-4 relative">
                                <div onClick={showdrop1} className='cursor-pointer flex'>
                                    <img className='mx-3' src={dropimg1} alt="" /><span>English</span>
                                    <i class="fa-solid fa-angle-down ml-1"></i>

                                </div>
                                <div className={`dropdown absolute w-[100%] mt-3 ${drop1} border border-black bg-white shadow-[0_10px_15px_-0px_rgba(0,0,0,0.3)]`}>
                                    <div className="flex p-2">
                                        <img src={dropimg2} alt="" />
                                        <p>France</p>
                                    </div>
                                    <div className="flex p-2">
                                        <img src={dropimg3} alt="" />
                                        <p>USA</p>
                                    </div>
                                </div>
                            </li>

                            <li className="usa-drop">
                                USA
                                <i class="fa-solid fa-angle-down ml-2"></i>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='nav-main flex justify-between py-6 px-[50px]'>
                    <ul className='list-none flex'>
                        <li className='mx-2 hover:underline'>
                        <Link to={"/"}>HOME</Link>
                        </li>
                        <li className='mx-2 hover:underline'>SHOP</li>
                        <li className='mx-2 hover:underline'>
                            <Link to={"/cart"}>CART</Link>
                            </li>
                        <li className='mx-2 hover:underline'>CHECKOUT</li>
                    </ul>
                    <div className="w-[130px]">
                        <img src={logo} alt="" className='w-[100%]' />
                    </div>
                    <div className='icons flex text-[1.5rem]'>
                        <i onClick={sign1} class="cursor-pointer fa-regular fa-user mx-4"></i>
                        <i onClick={search1} class="cursor-pointer fa-solid fa-magnifying-glass mx-4"></i>
                        <i class="fa-regular fa-star mx-4"></i>
                        <i onClick={cartopen1} class="fa-solid fa-bag-shopping cursor-pointer mx-4"></i>
                    </div>
                </div>
                <div className="relative">
                    <div className={`sign-parent fixed mt-[-160px] h-[100vh] w-[100%] flex justify-center items-center ${sign} bg-[rgba(0,0,0,0.25)]`}>
                        <div className="sign-in-child fixed rounded-md h-[65%] w-[37%] bg-white">
                            <div onClick={sign1} className="cursor-pointer cross-cir  bg-white rounded-full h-10 w-10 shadow-[-5px_7px_15px_-10px_rgba(0,0,0,0.75)] ml-[96%] mt-[-15px] flex justify-center items-center">
                                <i class="fa-solid fa-xmark text-[1.5rem]"></i>
                            </div>
                            <div className="w-[85%] m-auto flex flex-col items-center">
                                <p className="head text-[2rem] font-semibold">Sign In</p>
                                <p className='mt-3 text-gray-600'>Don't have an account yet? Sign up for free</p>
                                <input type="text" placeholder='Your username or E-mail ' className='border w-[100%] text-md py-2 px-3 mt-10' />
                                <input type="password" placeholder='Password' className='border w-[100%] text-md py-2 px-3 mt-3' />
                                <div className="flex justify-between w-[100%] mt-4">
                                    <div className="label">
                                        <input type="checkbox" name="" id="sign" />
                                        <label className='ml-3' htmlFor="sign">Stay signed in</label>
                                    </div>
                                    <p className='password'>Forgot your password?</p>
                                </div>
                                <button className='bg-black text-white w-[100%] py-2 mt-6'>LOG IN</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative">
                    <div className={`search-parent fixed mt-[-160px] h-[100vh] w-[100%] ${search} bg-[rgba(0,0,0,0.25)]`}>
                        <div className="bg-white w-[100%] h-[25%]">
                            <div onClick={search1} className="cursor-pointer cross-cir rounded-full h-10 w-10 ml-[97%] mt-2 flex justify-center items-center">
                                <i class="fa-solid fa-xmark text-[1.5rem]"></i>
                            </div>
                            <div className="w-[93%] m-auto flex justify-between">
                                <div className='w-[140px]'>
                                    <img src={logo} alt="" />
                                </div>
                                <input type="search" name="" id="" placeholder='Search products' className='p-2 border  w-[50%]' />
                                <div className="logos">
                                    <i class="fa-regular fa-user mx-4 text-[1.5rem]"></i>
                                    <i class="fa-solid fa-magnifying-glass mx-4 text-[1.5rem]"></i>
                                    <i class="fa-regular fa-star mx-4 text-[1.5rem]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className={`cart-parent ${cart} fixed mt-[-160px] h-[100vh] w-[100%]  bg-[rgba(0,0,0,0.25)]`}>
                        <div className="bg-white h-[100%] w-[33%] ml-[67%] duration-300">
                            <div className="cross-cir rounded-full h-10 w-10 ml-[91%] mt-[0px] flex justify-center items-center">
                                <i onClick={cartopen1} class="fa-solid fa-xmark cursor-pointer text-[1.5rem]"></i>
                            </div>
                            <p className="text-[1.5rem] mx-[5%]">Shopping Cart</p>
                            {/* side cart */}
                           <Sidecart/>
                        </div>
                    </div>


                </div>



            </>
        )
    
}

export default Nav1