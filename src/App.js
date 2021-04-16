// // import logo from './logo.svg';
// import './App.css';
import React from "react";
import CartItem from './CartItem.js';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component{
 
    
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

         getCartCount=()=>{
           const {products}=this.state;
           let count=0;
           products.forEach((product)=>{
             count+=product.qty;
           })
           return count;
         }

         getTotalPrice=()=>{
           const {products}=this.state;
           let price=0;
          products.forEach((product)=>{
            price+=(product.qty*product.price)
          })
          return price;
         }
 
     
      render(){
        const{products}=this.state;
      return (
          <div className="App">
              <Navbar count={this.getCartCount()}/>
              <Cart 
              products={products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDelete={this.handleDeleteProduct} />

                  <div style={{padding:10,fontSize:20}}>Total price: {this.getTotalPrice()}</div>

          </div>
         );
    }
  }

export default App;
 