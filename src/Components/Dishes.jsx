import React, { useContext, useState } from 'react'
// import { YamEgg, Spaghetti, Beans } from '../Assets'
import CartContext from '../Context/CartContext'

const Dishes = () => {
    const [quantity, setQuantity] = useState([])

    const { dishes, addToCart } = useContext(CartContext)

    const handleChange = e => {
        setQuantity(e.target.value)
    }

  return (
    <>
        <div className="lg:w-10/12 mx-auto mt-24">
            <h1 className="text-primary-500 text-center font-bold text-3xl">Our daily dishes</h1>
            <p className="text-center text-lg">Check out recomended dishes of your choice</p>

            <div className="grid lg:grid-cols-3 my-10">
                {dishes.map( dish => (
                    <div className="flex flex-col items-center gap-5 border border-b-orange-500 lg:border-primary-500 py-10 lg:p-10" key={dish.id}>
                        <img src={dish.img} alt="" className='w-[250px]' />
                        <p className="font-semibold text-2xl">{dish.name}</p>

                        <div className="flex items-center gap-32 lg:gap-10">
                            <p className='font-medium text-2xl'>₦{dish.price}</p>
                            <div className="flex items-center">
                                <input 
                                    type="number" 
                                    className='w-16 mr-[-10px] border border-primary-500 px-2 rounded-md outline-primary-500'
                                    value={dish.quantity}
                                    onChange={() => handleChange} />
                                <button className='bg-primary-600 px-8 py-2 text-white rounded-lg' onClick={() => addToCart(dish.id, dish.name, dish.img, dish.price, dish.quantity)}> + Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Dishes