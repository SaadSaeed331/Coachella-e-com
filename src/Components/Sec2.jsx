import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Data from '../Data'
import { Link } from 'react-router-dom'




const Sec2 = () => {
  // const { array } = useSelector((state) =>  state.main )
    const dispatch = useDispatch()

    const openItem =(e)=>{
      dispatch({type:"openitem", data:e})
    }

  const sales =  Data.filter(e=> e.sec === "last sale")
  return (
    <>
    
    <div className="main  h-[100vh] w-[93%] ml-[3.5%] mt-[17vh]">
            <div className="head-div flex justify-between">
                <div className='heading'>
                    <p className='text-[2.2rem]'>Last Chance Sale</p>
                    <p className='text-[1rem] text-gray-500'>Save on all best selling and exclusive styles</p>
                </div>
                <div></div>
            </div>
            <div className="border-t mt-[30px]"></div>
            <div className="product-parent mt-[30px] flex justify-between">
              {/* map */}
              {sales.map((e,i)=>{
                return(
                  
                  <div className="product w-[24.5%]">
                
                <div className="img-div-parent relative overflow-hidden">
                  <img   src={e.mainimg} alt=""/>
                  <p className="py-[2px] px-3 rounded-xl bg-red-600 text-white font-semibold absolute top-[20px] left-[20px]">-34%</p>
                  <div className="side-div absolute top-[20px] left-[100%] duration-300">
                  <i class="fa-regular fa-star p-3 mt-[10px] text-[1.5rem] bg-white rounded-full"></i>
                  <i class="fa-solid fa-arrow-right-arrow-left p-3 mt-[10px] text-[1.5rem] bg-white rounded-full"></i>
                  <i class="fa-regular fa-eye p-3 mt-[10px] text-[1.5rem] bg-white rounded-full"></i>
                  </div>
                  <Link to={`item/${e.id}`}>
                  <button onClick={()=>openItem(e)} className='show-btn bg-white absolute w-[80%] top-[100%] left-[10%] py-2 hover:bg-black hover:text-white duration-300'>SELECT OPTIONS</button>
                  </Link>
                </div>

                <h2 className='text-xl mt-5'>{e.prdt_name}</h2>
                <p className=' text-lg'><span className='line-through text-gray-500 mr-3'>${e.price}.00</span>${e.disc_price}.00</p>
                <div className="mt-3 flex">
                <div className={`bg-black p-4 rounded-full w-3`}></div>
                <div className={`bg-yellow-900 p-4 rounded-full w-3 ml-3`}></div>
                </div>
              </div>
                  
                
                )
              })}
              
            </div>

      </div>
             

             

             
    
    </>
  )
}

export default Sec2