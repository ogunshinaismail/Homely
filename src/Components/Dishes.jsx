import React from 'react'
import { CartState } from '../Context/Context'

const Dishes = () => {
    const { 
        state: { products, cart },
        dispatch, 
    } = CartState();

  return (
    <>
        <div className="lg:w-10/12 mx-auto mt-24">
            <h1 className="text-primary-500 text-center font-bold text-3xl">Our daily dishes</h1>
            <p className="text-center text-lg">Check out recomended dishes of your choice</p>

            <div className="grid lg:grid-cols-3 my-10">
                {products.map( (dish, i) => (
                    <div className="flex flex-col items-center gap-5 border border-b-orange-500 lg:border-primary-500 py-10 lg:p-10" key={dish.id}>
                        <img src={dish.img} alt="" className='w-[250px]' />
                        <p className="font-semibold text-2xl lg:text-2xl">{dish.name}</p>

                        <div className="flex items-center gap-32 lg:gap-10">
                            <p className='font-medium text-2xl'>₦{dish.price}</p>
                            <div className="flex items-center">
                                
                                {cart.some( (p) => p.id === dish.id) ? (
                                        <button 
                                            className='bg-white border border-primary-600 px-2 md:px-4 py-2 text-primary-600 font-medium rounded-lg'
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: dish
                                                })
                                            }}
                                        > 
                                            - Remove
                                        </button>
                                    ) : (

                                    <button 
                                        className='bg-primary-600 px-8 md:px-4 py-2 text-white rounded-lg'
                                        onClick={() => {
                                            dispatch({
                                                type: 'ADD_TO_CART',
                                                payload: dish
                                            })
                                        }}
                                    > 
                                        + Add
                                    </button>
                                )}
                                
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

// <button className='bg-primary-600 px-8 py-2 text-white rounded-lg' onClick={() => addToCart(dish.id, dish.name, dish.img, dish.price, dish.quantity)}> + Add</button>