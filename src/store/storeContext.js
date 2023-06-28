import { createContext } from "react";

const StoreContext = createContext({
    cart: [],
    searchInfo: {},
    user: {},
    addInfo: () => {},
    removeFromCart: () => {}
});

export default StoreContext;