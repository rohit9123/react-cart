import React from "react";

class CartItem extends React.Component{

    
    render(){
        const {price,tittle,qty,id}=this.props.product;
        console.log(this.props.product);
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{tittle}</div>
                    <div style={{color:'#ccc'}}> Rs{price}</div>
                    <div style={{color:'#ccc'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="increase" className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                    onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                    />
                    <img alt="decrease" className="action-icons" 
                    src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                    onClick={()=>this.props.onDecreaseQuantity(this.props.product )}/>

                    <img alt="Delete" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2874/2874821.svg"
                    onClick={()=>this.props.onDelete(id)}
                        />
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