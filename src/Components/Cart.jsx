import React, { useEffect, useState } from 'react'
// import CartContext from '../Context/CartContext'
import { CartState } from '../Context/Context'

const Cart = ({setShowCart}) => {
    // const { items } = useContext(CartContext)
    const { state: { cart }, dispatch } = CartState()
    const [total, setTotal] = useState()

    useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart])
    
  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
            <div className="relative w-auto my-6 mx-auto">

                {/*content*/}
                <div className="border-0 rounded-lg lg:w-[800px] md:w-[600px] relative flex flex-col bg-white outline-none focus:outline-none">
                    {/*body*/}
                    {cart.length > 0 ? (
                        <div className="relative overflow-y-scroll max-h-72 px-5 my-5">
                            {cart.map(item => (
                                <div className="w-full relative p-6 flex items-center gap-10 justify-between border-b border-primary-500" key={item.id}>
                                    <div className="flex items-center gap-5">
                                        <img src={item.img} alt="" className='w-[70px] lg:w-[150px]' />
                                        <div className="flex flex-col gap-3">
                                            <h1 className="font-medium lg:text-2xl">{item.name}</h1>
                                            <div className="flex items-center gap-3 lg:gap-8">
                                                <h1 className='font-medium text-sm text-sm lg:text-lg text-primary-600'>₦{item.price}</h1>
                                                <div className="flex items-center gap-3">
                                                    <p className="text-sm lg:text-lg">QTY</p>
                                                    <input 
                                                        className="border border-gray-300 outline-primary-300 px-1 lg:py-1 lg:px-2 rounded-md w-10 lg:w-16" type="number" 
                                                        value={item.qty}
                                                        onChange={(e) => {
                                                            dispatch({
                                                                type: "CHANGE_CART_QTY",
                                                                payload: {
                                                                    id: item.id,
                                                                    qty: e.target.value,
                                                                },
                                                            })
                                                        }}
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="flex flex-col items-end gap-2">
                                        <button 
                                            className="text-2xl text-primary-500 font-bold"
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item
                                                })
                                        }}>
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl p-6 font-medium text-center">Cart is empty</p>
                    )}
                    

                    {/*footer*/}
                    <div className="m-6 py-6 border-t-2 border-primary-600">
                        <div className="flex items-center justify-between">
                            <p className='font-bold text-2xl'>Total Amount</p>
                            <p className='font-bold text-2xl'>₦{total}</p>
                        </div>
                        <div className="flex items-center justify-end mt-6">
                            <button
                            className="border border-primary-600 px-10 py-2 text-primary-500 rounded-md mr-3"
                            type="button"
                            onClick={() => setShowCart(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-primary-600 px-10 py-2 text-white rounded-md"
                                type="button"
                                onClick={() => setShowCart(false)}
                                disabled={cart.length === 0}
                            >
                                Order
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        
    </>
  )
}

export default Cart