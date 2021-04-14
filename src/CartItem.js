import React from "react";

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#ccc'}}> Rs 999</div>
                    <div style={{color:'#ccc'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                    {/* buttons */}
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