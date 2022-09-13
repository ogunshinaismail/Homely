import React, { useEffect, useState } from 'react'
import { CartState } from "../Context/Context";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { SearchGrey } from '../Assets'

const AllDishes = () => {
    const [dishes, setDishes] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')
    const { user } = useAuthContext();
    const {
        state: { cart },
        dispatch,
      } = CartState();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDishes = async () => {
          const response = await fetch("https://backend-two-beta.vercel.app/api/homely");
          const json = await response.json();
    
          if (response.ok) {
            setDishes(json);
          }
        };
    
          fetchDishes();
      }, []);

      const handleActiveUser = (dish) => {
        if (user) {
          dispatch({
            type: "ADD_TO_CART",
            payload: dish,
          });
        } else {
          navigate("/signin")
        }
      }

  return (
    <div className='w-full lg:w-11/12 mx-auto'>
        <div className='flex flex-col gap-5 lg:items-center lg:flex-row justify-between lg:w-full mt-32 w-[95%] mx-auto'>
          <form className="flex items-center">   
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <img src={SearchGrey} className="w-5 h-5 text-gray-500 dark:text-gray-400" alt='search' />
                  </div>
                  <input 
                    type="text" 
                    id="simple-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-primary-200" placeholder="Search"
                    onChange={e => { setSearchTerm(e.target.value) }} 
                  />
              </div>
          </form>  
          
          <div>
            <select className="border outline-primary-200 px-4 py-2 w-full rounded-lg">
                <option>Choose type of food</option>
                <option>Solid</option>
                <option>Light</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 my-10">
            {dishes &&
              dishes.filter(val => {
                if(searchTerm === "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
              }).map((dish, i) => (
                <div
                  className="flex flex-col items-center gap-5 border border-b-orange-500 lg:border-primary-500 py-10 lg:p-10"
                  key={dish._id}
                >
                  <img
                    src={dish.img}
                    alt=""
                    className="w-[250px] h-[250px] rounded-full"
                  />
                  <p className="font-semibold text-2xl lg:text-2xl">
                    {dish.name}
                  </p>

                  <div className="flex items-center gap-32 lg:gap-10">
                    <p className="font-medium text-2xl">₦{dish.price}</p>
                    <div className="flex items-center">
                      {cart.some((p) => p._id === dish._id) ? (
                        <button
                          className="bg-white border border-primary-600 px-2 md:px-4 py-2 text-primary-600 font-medium rounded-lg"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: dish,
                            });
                          }}
                        >
                          - Remove
                        </button>
                      ) : (
                        <button
                          className="bg-primary-600 px-8 md:px-4 py-2 text-white rounded-lg"
                          onClick={() => {handleActiveUser(dish)}}
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
  )
}

export default AllDishes