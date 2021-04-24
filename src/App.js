// // import logo from './logo.svg';
// import './App.css';
import React from "react";
import CartItem from './CartItem.js';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase'

class App extends React.Component{
 
    
      constructor(){
        super();
        this.state={
            products:[],
            loading:true 
        }
    }

    componentDidMount(){
      firebase.firestore().collection('products')
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        }) 

        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })
        this.setState({
          products:products,
          loading:false
        })
      })
    }


        handleIncreaseQuantity=(product)=>{
         const {products}=this.state;
         const index=products.indexOf(product);
          let docRef=firebase.firestore().collection('products').doc(products[index].id);
        //  products[index].qty+=1;
        docRef.update({
          qty:products[index].qty+1
        }).then(()=>{
          console.log('updated');
        }).catch((err)=>{
          console.log(err)
        })
         
         }


          handleDeleteProduct=(id)=>{
            const decRef=firebase.firestore().collection('products').doc(id);
            decRef.delete().then(()=>{
              console.log('deleted')
            }).catch((err)=>{
              console.log(err)
            })


          }
 
 
        handleDecreaseQuantity=(product)=>{
         const{products}=this.state;
         const index=products.indexOf(product);
 
         const decRef=firebase.firestore().collection('products').doc(products[index].id);
         if(products[index].qty>=1){
         decRef.update({
           qty:products[index].qty-1
         }).then(()=>{
           console.log('Updated')
         }).catch((err)=>{
           console.log(err)
         })
        }else{
          decRef.delete().then(()=>{
            console.log('deleted')
          }).catch((err)=>{
            console.log(err)
          })
        }

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
           const { products}=this.state;
           let price=0;
           console.log(price);
          products.forEach((product)=>{
            
            price+=(product.qty*product.price)
            console.log(price);
          })
          console.log(price)
          return price;
         }


        //  addProduct=()=>{
        //    firebase.firestore().collection('products')
        //    .add({
        //      img:"",
        //      price:999,
        //      qty:9,
        //      tittle:'washing machine'
        //    }).then((docs)=>{
        //      console.log(docs);
        //    }).catch((err)=>{
        //     console.log(err);
        //    })
        //  }
     
      render(){
        const{products,loading}=this.state;
      return (
          <div className="App">
              <Navbar count={this.getCartCount()}/>
              {/* <button onClick ={this.addProduct} >Add Product</button> */}
              <Cart 
              products={products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDelete={this.handleDeleteProduct} />
                  {loading && <h1>loading....</h1>}
                  <div style={{padding:10,fontSize:20}}>Total price: {this.getTotalPrice()}</div>

          </div>
         );
    }
  }

export default App;
 