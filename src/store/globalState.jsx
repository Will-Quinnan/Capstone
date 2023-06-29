import { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
    const [car, setCar] = useState({});
    const [searchInfo, setSearchInfo] = useState({});
    const [user, setUser] = useState({})
    const [checkOut, setCheckOut] = useState({});

    const addInfo = (info) => {
        setSearchInfo(info);
        console.log(searchInfo)
    };

    const carSpecs = (info) => {
        setCar(info);
    };

    const userInfo = (info) => {
        setUser(info);
        console.log(user);
    };

    const checkOutInfo = () => {

    };

    return(
        <StoreContext.Provider 
            value={{
                car: car,
                searchInfo: searchInfo,
                user: user,
                checkOut: checkOut,
                addInfo: addInfo,
                carSpecs: carSpecs, 
                userInfo: userInfo,
                checkOutInfo: checkOutInfo
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;