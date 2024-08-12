import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import router from './routes'
import Navbar from './globals/components/navbar/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Cart from './pages/cart/Cart'
import Register from './pages/auth/register/Register'
import Product from './pages/home/components/Product'
import ProductDetails from './pages/productDetails/ProductDetails'
import Footer from './globals/components/footer/Footer'
import Checkout from './pages/checkout/Checkout'

function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/productdetails/:id" element={<ProductDetails/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      {/* <Navbar/>
<RouterProvider router={router} /> */}
      </Provider>
    </>


  )
}

export default App
