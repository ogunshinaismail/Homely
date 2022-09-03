import React from 'react'
import { Done } from '../Assets'
import { CartState } from '../Context/Context'

const OrderComplete = ({setShowOderComplete, setShowCart}) => {
    const { state: { cart }, dispatch } = CartState()
  return (
    <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
        <div className="relative w-11/12 my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg w-full mx-auto p-6 lg:w-[520px] md:w-[520px] relative flex flex-col bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className='my-6 mx-6 flex flex-col items-center justify-center gap-4'>
                <img src={Done} alt="" className='border-4 rounded-full p-5 opacity-60' />
                <p className="text-3xl font-medium">Successful!</p>
                <p className="text-lg text-gray-600 font-light">Your order is on the way</p>
                <button
                    className="bg-[#7066E0] px-5 text-xl py-2 text-white rounded-md mr-3 hover:bg-[#7066F9] outline-none"
                    type="button"
                    onClick={() => {
                        dispatch({
                            type: "ON_DELETE_ALL_ITEMS_FROM_CART",
                            payload: cart
                        })
                        setShowOderComplete(false)
                        setShowCart(false)
                    }}
                >
                    OK
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderComplete