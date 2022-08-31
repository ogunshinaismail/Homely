import React, { useState } from 'react'
import { YamEgg, Spaghetti, Beans } from '../Assets'

const Dishes = () => {
    const dishes = [
        {
            "id": 1,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1500.00
        },
        {
            "id": 2,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1200.00
        },
        {
            "id": 3,
            "name": "Porridge beans",
            "img": Beans,
            "price": 1400.00
        },
        {
            "id": 4,
            "name": "Yam and egg sauce",
            "img": YamEgg,
            "price": 1100.00
        },
        {
            "id": 5,
            "name": "Spag and pepper sauce",
            "img": Spaghetti,
            "price": 1600.00
        },
        {
            "id": 6,
            "name": "Porridge beans",
            "img": Beans,
            "price": 900.00
        },
    ]

    const room = []

    const [quantity, setQuantity] = useState([...room])

    const handleroom = (e, id) => {
        const { value } = e.target;
        setQuantity((room) =>
          room?.map((list, index) =>
            index === id ? { ...list, room: value } : list
          )
        );
      };

  return (
    <>
        <div className="lg:w-10/12 mx-auto mt-24">
            <h1 className="text-primary-500 text-center font-bold text-3xl">Our daily dishes</h1>
            <p className="text-center text-lg">Check out recomended dishes of your choice</p>

            <div className="grid lg:grid-cols-3 my-10">
                {dishes.map( (dish, i) => (
                    <div className="flex flex-col items-center gap-5 border border-b-orange-500 lg:border-primary-500 py-10 lg:p-10" key={dish.id}>
                        <img src={dish.img} alt="" className='w-[250px]' />
                        <p className="font-semibold text-2xl">{dish.name}</p>

                        <div className="flex items-center gap-32 lg:gap-10">
                            <p className='font-medium text-2xl'>₦{dish.price}</p>
                            <div className="flex items-center">
                                <input
                                    name={quantity}
                                    type="number" 
                                    className='w-16 mr-[-10px] border border-primary-500 px-2 rounded-md'
                                    value={quantity}
                                    onChange={e => handleroom(e, i)} />
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