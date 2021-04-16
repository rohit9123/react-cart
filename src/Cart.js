import React from "react";
import CartItem from './CartItem'

class Cart extends React.Component{
   constructor(){
       super();
       this.state={
           products:[
               {
                   price: 99,
                   tittle: 'Watch',
                   qty:1,
                   img:"",
                   id:1
               },
               {
                price: 121999,
                tittle: 'MacbookPro',
                qty:1,
                img:"",
                id:2  
            },
            {
                price: 999,
                tittle: 'MobilePhone',
                qty:1,
                img:"",
                Id:3
            }
           ]
       }
   }
    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const item=products.filter((item)=>item.id!==id);

        this.setState({
            products:item
        })
    }


    handleDecreaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);

        if(products[index].qty>0)
        products[index].qty-=1;
        

        this.setState({
            products:products
        })


    }
    render(){
        const{products}=this.state;
        return(

           <div className="cart">
               {/* <CartItem qty={1} price={999} tittle={"watch"} ing={""}></CartItem> */}
                {products.map((product)=>{
                    return <CartItem product={product} 
                    key={product.id} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDelete={this.handleDeleteProduct}
                    />
                })}
           </div> 
        );
    }
}

export default Cart;