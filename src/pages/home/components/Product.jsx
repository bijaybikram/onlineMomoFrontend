import React, { useEffect, useState } from 'react'
import Footer from '../../../globals/components/footer/Footer'
import axios from 'axios'

const Product = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async()=> {
        const response = await axios.get("http://localhost:3000/api/products")
        if(response.status == 200){
            setProducts(response.data.data)
        }
    }
    useEffect(()=> {
        fetchProducts()
    },[])
  return (
    <>
    <div className="relative w-full"> 
        <div className="relative bg-white-50">
            <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        {/* <!-- component --> */}
        <h1 className="font-bold text-4xl text-yellow-900 md:text-2xl lg:w-10/12">Our Popular Foods</h1>
        {products.map((product) => {
            return(
                <div key={product._id} class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img class="h-48 w-full object-cover object-center" src={product.productImage} alt="Product Image" />
                <div class="p-4">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.productName}</h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{product.productDescription}</p>
                    <div class="flex items-center">
                    <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs.{product.productPrice}</p>
                    {/* <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                    <p class="ml-auto text-base font-medium text-green-500">20% off</p> */}
                    <p class="text-base  font-medium text-gray-500 dark:text-gray-300">{product.productStatus}</p>
                </div>
                </div>
                </div>
            )
        })}
        </div>
        </div>  
    </div>
    <Footer/>
    </>
  )
}

export default Product