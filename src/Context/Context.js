import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { YamEgg, Spaghetti, Beans } from '../Assets'
import { cartReducer } from "./Reducer";
import { useAuthContext } from "../Hooks/useAuthContext";

const Cart = createContext();

const Context = ({children}) => {
    const [dishes, setDishes] = useState(null)
    const {user} = useAuthContext()

    const dishesr = [
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

    useEffect(() => {
        const fetchDishes = async () => {
            const response = await fetch('https://backend-two-beta.vercel.app/api/homely', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                setDishes(json)
            }
        }

        if(user) {
            fetchDishes()
        }
    }, [user])

    console.log(dishes)

    // Assign dishes to products below and see what it's showing 
    
    const [state, dispatch] = useReducer(cartReducer, {
        products: dishes,
        cart: []
    })

    console.log(state.products)

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}