import { createContext, useContext, useReducer } from "react";
import { YamEgg, Spaghetti, Beans } from '../Assets'
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({children}) => {
    const dishes = [
        {
            "id": 1,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1500.00,
        },
        {
            "id": 2,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1200.00,
        },
        {
            "id": 3,
            "name": "Porridge beans",
            "img": Beans,
            "price": 1400.00,
        },
        {
            "id": 4,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1100.00,
        },
        {
            "id": 5,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1600.00,
        },
        {
            "id": 6,
            "name": "Porridge beans",
            "img": Beans,
            "price": 900.00,
        },
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: dishes,
        cart: []
    })

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}