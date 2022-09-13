import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import { Trash } from "../Assets";
import OrderCOmplete from "./OrderComplete";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [showOderComplete, setShowOderComplete] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleRemoveCart = async (item) => {
    if (user) {
      console.log(item._id);
      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/cart/" + item._id,
        {
          method: "DELETE",
          headers: {
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
  
  const handleRemoveALLCart = async () => {
    if (user) {
      const remove = cart.find((item) => item.user_id);
      console.log(remove);
      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/cart/user/" + remove.user_id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "ON_DELETE_ALL_ITEMS_FROM_CART", payload: json });
        setShowOderComplete(true);
      }
    } else {
      navigate("/signin");
    }
  };

  console.log(cart);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
        <div className="relative w-auto my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg w-11/12 mx-auto lg:w-[800px] md:w-[600px] relative flex flex-col bg-white outline-none focus:outline-none">
            {/*body*/}
            {cart.length > 0 ? (
              <div className="relative overflow-y-scroll scroll-smooth max-h-72 px-5 my-5">
                {cart.map((item) => (
                  <div
                    className="w-full relative p-6 flex items-center gap-10 justify-between border-b last:border-none border-primary-500"
                    key={item._id}
                  >
                    <div className="flex items-center gap-5">
                    <div className="w-[70px] rounded-full lg:w-[150px] lg:h-[150px]">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[70px] h-[70px] rounded-full lg:w-[150px] lg:h-[150px]"
                      />
                    </div>
                      <div className="flex flex-col gap-3">
                        <h1 className="font-medium lg:text-2xl">{item.name}</h1>
                        <div className="flex items-center gap-3 lg:gap-8">
                          <h1 className="font-medium text-sm lg:text-lg text-primary-600">
                            ₦{item.price}
                          </h1>
                          <div className="flex items-center gap-3">
                            <p className="text-sm lg:text-lg">QTY</p>
                            <input
                              className="border border-gray-300 outline-primary-300 px-1 lg:py-1 lg:px-2 rounded-md w-10 lg:w-16"
                              type="number"
                              value={item.qty}
                              min="1"
                              onChange={(e) => {
                                if (item.qty.value < 1) {
                                  item.qty.value = 1;
                                }
                                dispatch({
                                  type: "CHANGE_CART_QTY",
                                  payload: {
                                    id: item._id,
                                    qty: e.target.value,
                                  },
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end">
                      <button
                        onClick={() => {
                          handleRemoveCart(item);
                        }}
                      >
                        <img src={Trash} alt="" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-2xl p-6 font-medium text-center">
                Cart is empty
              </p>
            )}

            {/*footer*/}
            <div className="mt-6 mx-6 py-6 border-t-2 border-primary-600">
              <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Total Amount</p>
                <p className="font-bold text-2xl">₦{total + ".00"}</p>
              </div>
              <div className="flex items-center justify-end mt-6">
                <button
                  className="border border-primary-600 px-10 py-2 text-primary-500 rounded-md mr-3 hover:bg-primary-600 hover:border-none hover:text-white"
                  type="button"
                  onClick={() => setShowCart(false)}
                >
                  Close
                </button>

                <button
                  className="bg-primary-600 px-10 py-2 text-white rounded-md"
                  type="button"
                  onClick={() => {
                    handleRemoveALLCart();
                  }}
                  disabled={cart.length === 0}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOderComplete ? (
        <OrderCOmplete
          setShowOderComplete={setShowOderComplete}
          setShowCart={setShowCart}
        />
      ) : null}
    </>
  );
};

export default Cart;
