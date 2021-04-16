import React from "react";
import CartItem from './CartItem'

const Cart=(props)=>{

    
        const{products}=props;
        return(

           <div className="cart">
               {/* <CartItem qty={1} price={999} tittle={"watch"} ing={""}></CartItem> */}
                {products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDelete={props.onDelete}
                    />
                })}
           </div> 
        );
    
}

export default Cart;