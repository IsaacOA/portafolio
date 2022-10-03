import React from 'react'
import './productList.css'
import {Product} from '../product/Product'


export const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create And inspire</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facere nulla incidunt debitis natus cupiditate eaque impedit quaerat iste harum.
            </p>
        </div>
        <div className="pl-list">
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
        </div>
    </div>
  )
}
