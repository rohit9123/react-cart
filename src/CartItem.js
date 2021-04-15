import React from "react";

class CartItem extends React.Component{
    constructor(){
        super(); 
        this.state={
            price:999,
            title:'phone',
            qty:1,
            img:" " 
        }
    }
    increaseQuantity=()=>{
      
         //setstarte form 1
        //  this.setState({
        //      qty:this.state.qty+1,
        //  })

        //setstate from 2-if perivius state is required;
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1,
            }
        });
    }

    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            return{
                
                qty:prevState.qty>0?prevState.qty-1:0,
            }
        })
    }
    
    render(){
        const{price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#ccc'}}> Rs{price}</div>
                    <div style={{color:'#ccc'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="increase" className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                    onClick={this.increaseQuantity}
                    />
                    <img alt="decrease" className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                    onClick={this.decreaseQuantity}/>

                    <img alt="Delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1618418485~hmac=21fe89471b28cc4baea26476d116c9c2"/>
                    </div>
                </div>

            </div>
        );
    }
}

const styles={
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;