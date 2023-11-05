import React from 'react'
import "./CartItemCard.css"
import {Link} from "react-router-dom"


const CartItemCard = ({item, deleteCartItemss}) => {
  return (
    <div className='CartItemCard'>
      <img src={item.image} alt='item'/>
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={()=>deleteCartItemss(item.product)}>Remove</p>
      </div>
    </div>
  )
}

export default CartItemCard
