import React from 'react'

const ProductCard = (props) => {
    console.log("props:", props);
    const {itemName, price} = props
  return (
    <div className='w-80 py-8 px-12 rounded-xl border-2 border-neutral-300'>
        <h3>{itemName}</h3>
        <h3>{price}</h3>
    </div>
  )
}

export default ProductCard