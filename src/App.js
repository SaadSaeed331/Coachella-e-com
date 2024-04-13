import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Item from './Components/Item'
const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/item/:id' element={<Item/>}/>
</Routes>

</BrowserRouter>    
    
  )
}

export default App