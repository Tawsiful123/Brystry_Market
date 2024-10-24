
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
         <Routes>

              < Route path='/' element={<Shop/>} />
              < Route path='/mens' element={<ShopCategory category="mens"/>} /> 
              < Route path='/womens' element={<ShopCategory category="womens"/>} />
              < Route path='/kids' element={<ShopCategory category="kids"/>} />
              < Route path ="product" element={<Product/>}>
                  <Route path=':product' element={<Product/>}/>
            </Route>
            < Route path ='/cart' element={<Cart/>}/>
            < Route path ='/Login' element={<LoginSignup />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

