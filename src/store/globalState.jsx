import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1234, name: "Brayan", email: "test@gmail.com" });

    const addToCart = (product) => {
        let copy = [...cart];
        copy.push(product);
        setCart(copy);
        console.log(cart);
    };

    const removeFromCart = () => {
        console.log("Global fn - remove");
    };

    return(
        <StoreContext.Provider 
            value={{
                cart: cart,
                user: user, 
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;