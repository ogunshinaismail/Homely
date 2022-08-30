import React from 'react'
import { YamEgg, Spaghetti, Beans } from '../Assets'

const Dishes = () => {
    const dishes = [
        {
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1500.00
        },
        {
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1500.00
        },
        {
            "name": "Porridge beans",
            "img": Beans,
            "price": 1500.00
        },
        {
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1500.00
        },
        {
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1500.00
        },
        {
            "name": "Porridge beans",
            "img": Beans,
            "price": 1500.00
        },
    ]
  return (
    <>
        <div className="lg:w-10/12 mx-auto mt-24">
            <h1 className="text-primary-500 text-center font-bold text-3xl">Our daily dishes</h1>
            <p className="text-center text-lg">Check out recomended dishes of your choice</p>

            <div className="grid lg:grid-cols-3 my-10">
                {dishes.map( dish => (
                    <div className="flex flex-col items-center gap-5 border border-b-orange-500 lg:border-primary-500 py-10 lg:p-10">
                        <img src={dish.img} alt="" className='w-[250px]' />
                        <p className="font-semibold text-2xl">{dish.name}</p>

                        <div className="flex items-center gap-32 lg:gap-10">
                            <p className='font-medium text-2xl'>₦{dish.price}</p>
                            <div className="flex items-center">
                                <input type="number" className='w-16 mr-[-10px] border border-primary-500 px-2 rounded-md' />
                                <button className='bg-primary-600 px-8 py-2 text-white rounded-lg'> + Add</button>
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