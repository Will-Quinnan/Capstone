import { createContext } from "react";

const StoreContext = createContext({
    car: {},
    searchInfo: {},
    user: {},
    checkOut: {},
    carSpecs: () => {},
    addInfo: () => {},
    userInfo: () => {},
    checkOutInfo: () => {}
});

export default StoreContext;