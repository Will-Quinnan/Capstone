import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1234, name: "Brayan", email: "test@gmail.com" });

    const addInfo = (info) => {
        console.log(info);
    };

    const removeFromCart = () => {
        console.log("Global fn - remove");
    };

    return(
        <StoreContext.Provider 
            value={{
                cart: cart,
                user: user,
                addInfo: addInfo,
                removeFromCart: removeFromCart, 
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;