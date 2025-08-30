import React from 'react'
import { useProducts } from '../api/fetchApi'
import ProductCard from "../components/ProductCard";


const ShopPage = () => {

  const {data, isLoading, isError,error}= useProducts()
  return (
    <div className='container my-20'>
      {/* top */}
      <div className=' flex justify-between items-center'>
        <h2 className='text-2xl font-semibold text-slate-800'>Shop</h2>

        <div>
          <label htmlFor="category">Filter By Category:</label>
          <select name='category' id='category'>
          <option value="">All</option>
          <option value="Cloth">Cloth</option>
          <option value="shoes">Shoes</option>
          <option value="electronics">Electronics</option>

        </select>
        </div>
      </div>

      <div className='w-full border-b border-slate-300 my-6'/>

      {/* product list */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            isLoading ? "loading...":
            isError ? <p>Error: {error.message}</p>:
            data.slice(0,4).map(item => (
              <ProductCard key={item.id} item = {item} />
            ))

          }
        </div>
    </div>
  )
}

export default ShopPage