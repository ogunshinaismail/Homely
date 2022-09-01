import { createContext,  useEffect,  useState } from "react";
import { YamEgg, Spaghetti, Beans } from '../Assets'

const CartContext = createContext();

export function CartProvider({children}) {
    const dishes = [
        {
            "id": 1,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1500.00,
            "quantity": 3
        },
        {
            "id": 2,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1200.00,
            "quantity": 1
        },
        {
            "id": 3,
            "name": "Porridge beans",
            "img": Beans,
            "price": 1400.00,
            "quantity": 1
        },
        {
            "id": 4,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1100.00,
            "quantity": 1
        },
        {
            "id": 5,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1600.00,
            "quantity": 1
        },
        {
            "id": 6,
            "name": "Porridge beans",
            "img": Beans,
            "price": 900.00,
            "quantity": 1
        },
    ]

    const [items, setItems] = useState([])
    
    const addToCart = (id, name, img, price, quantity) => {
        setItems((prevState) => [...prevState, {id, name, img, price, quantity}])
    }

    return (
        <CartContext.Provider value={{dishes, items, addToCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext