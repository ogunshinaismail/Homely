import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { CartState } from "../Context/Context";

export const ApiHandler = () => {
  const { user } = useAuthContext();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();
  const [showOderComplete, setShowOderComplete] = useState(false);
  const [dishes, setDishes] = useState(null);

  /* Fetch Dishes function */
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

  /* Add dishes to cart */
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

  /* Remove cart from the dishes section */
  const handleRemoveDishFromCart = async (dish) => {
    if (user) {
      const remove = cart.find((item) => item.name === dish.name);
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

  /* Delete Cart from the cart section */
  const handleRemoveCart = async (item) => {
    if (user) {
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

  /* Clear all user cart */
  const handleRemoveALLCart = async () => {
    if (user) {
      const remove = cart.find((item) => item.user_id);
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

  /* Update cart quantity */
  const handleUpdateCartQty = async (e, item) => {
    if (user) {
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
      const response = await fetch(
        "https://backend-two-beta.vercel.app/api/cart/" + item._id,
        {
          method: "PATCH",
          body: JSON.stringify({ qty: e.target.value }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        console.log(json.qty);
      }
    } else {
      navigate("/signin");
    }
  };

  /* Fetch user cart */
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

  return {
    handleRemoveCart,
    handleRemoveALLCart,
    handleUpdateCartQty,
    showOderComplete,
    setShowOderComplete,
    handleActiveUser,
    handleRemoveDishFromCart,
    fetchCarts,
    fetchDishes,
    dishes,
    setDishes
  };
};
