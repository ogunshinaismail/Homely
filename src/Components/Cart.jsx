import React from 'react'
import { YamEgg } from '../Assets'

const Cart = ({setShowCart}) => {
  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
            <div className="relative w-auto my-6 mx-auto">

                {/*content*/}
                <div className="border-0 rounded-lg w-[800px] relative flex flex-col bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="w-full relative p-6 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <img src={YamEgg} alt="" className='w-[150px]' />
                            <div className="flex flex-col gap-3">
                                <h1 className="font-medium text-2xl">Yam and egg sauce</h1>
                                <div className="flex items-center gap-8">
                                    <h1 className='font-medium text-lg text-primary-600'>₦3500.00</h1>
                                    <p className="border border-gray-300 py-1 px-2 rounded-md">x1</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="border border-primary-600 font-medium text-primary-500 py-[1px] px-2 rounded-md text-2xl">-</p>
                            <p className="border border-primary-600 font-medium text-primary-500 py-[1px] px-2 rounded-md text-2xl">+</p>
                        </div>
                    </div>

                    {/*footer*/}
                    <div className="m-6 py-6 border-t-2 border-primary-600">
                        <div className="flex items-center justify-between">
                            <p className='font-bold text-2xl'>Total Amount</p>
                            <p className='font-bold text-2xl'>₦3500.00</p>
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