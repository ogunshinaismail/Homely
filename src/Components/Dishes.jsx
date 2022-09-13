import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Dishes = () => {
  const [dishes, setDishes] = useState(null);
  const { user } = useAuthContext();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/homely"
        /*  {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        } */
      );
      const json = await response.json();

      if (response.ok) {
        setDishes(json);
      }
    };

    fetchDishes();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchCarts = async () => {
        const response = await fetch(
          "https://backend-two-beta.vercel.app/api/cart",
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_TO_CART", payload: json });
        }
      };
      fetchCarts();
    }
  }, [dispatch, user]);

  const handleActiveUser = async (dish) => {
    if (user) {
      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/cart",
        {
          method: "POST",
          body: JSON.stringify(dish),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (!response.ok) {
        /* setError(json.error)
      setEmptyFields(json.emptyFields) */
      }
      if (response.ok) {
        /* setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([]) */
        dispatch({ type: "ADD_TO_CART", payload: json });
      }
    } else {
      navigate("/signin");
    }
  };

 
  // FOR SLICING THE FETCHED ARRAY BEFORE CLICKING THE SEE MORE

  // const size = 3
  // const dishesSlice = dishes.slice(0, size)

  const handleRemoveCart = async (dish) => {
    if (user) {
      const remove = cart.find((item) => item.name === dish.name);
      const found = cart.find((obj) => {
        return obj.name === dish.name;
      });
      console.log(found);
      console.log(dish);

      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/cart/" + remove._id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "REMOVE_FROM_CART", payload: json });
      }
    } else {
      navigate("/signin");
    }
  };

  const handleSeeMore = () => {
    if (user) {
      navigate("/dishes")
    } else {
      navigate("/signin")
    }
  }

  return (
    <div id="dishes">
      <div className="lg:w-10/12 mx-auto mt-24">
      
        <h1 className="text-primary-500 text-center font-bold text-3xl">
          Our daily dishes
        </h1>
        <p className="text-center text-lg">
          Check out recomended dishes of your choice
        </p>

        <div className="flex flex-col gap-9">
          <div className="grid lg:grid-cols-3 my-10">
            {dishes &&
              dishes.map((dish, i) => (
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
                      {cart.some((p) => p.name === dish.name) ? (
                        <button
                          className="bg-white border border-primary-600 px-2 md:px-4 py-2 text-primary-600 font-medium rounded-lg"
                          onClick={() => {
                            handleRemoveCart(dish);
                          }}
                        >
                          - Remove
                        </button>
                      ) : (
                        <button
                          className="bg-primary-600 px-8 md:px-4 py-2 text-white rounded-lg"
                          onClick={() => {
                            handleActiveUser(dish);
                          }}
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

                <button 
                  className="bg-primary-600 py-2 px-8 text-white font-medium rounded-lg w-40 mx-auto hover:bg-white hover:text-primary-600 hover:border-2 hover:font-bold hover:border-primary-600"
                  onClick={() => handleSeeMore()}
                >
                  See more
                </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dishes;