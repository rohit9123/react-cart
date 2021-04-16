import React from "react";

const Navbar =(props)=>{

    return (
            <div style={styles.nav} className>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/34/34568.svg?token=exp=1618602856~hmac=d03a257d1b07e40a0841479913296670" alt="cart_item"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>

            </div>
        );
    
}


const styles={
    cartIcon:{
        // margintop:10,
        height:32,
        marginRight:20,
        // margintop:20
        top:10,
        alignItem:'center',
    },
    nav:{
        // padding:'2px 2p',
        // margintop:20,
        height:60,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItem: 'center'
    },
    cartIconContainer:{
        margintop:10,
        position: 'relative',
        alignItem:'center'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:' 4px 8px',
        position:'absolute',
        right: 0,
        top:-9
    }
};


export default Navbar;