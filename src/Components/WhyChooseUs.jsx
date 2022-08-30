import React from 'react'
import { EasyToOrder, DeliveryMan, Quality } from '../Assets'

const WhyChooseUs = () => {
  return (
    <>
        <div className="w-10/12 mx-auto my-16">
            <h1 className="text-primary-500 text-center font-bold text-3xl">Why choose us</h1>
            <p className="text-center text-lg">This is what makes our product different</p>

            <div className="w-full bg-primary-50 mt-10 grid grid-cols-3 py-11 gap-11">
                <div className="bg-white py-16 px-10 flex flex-col items-center gap-7">
                    <img src={EasyToOrder} alt="" className='w-16' />
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">Easy to order</h1>
                        <p className="text-sm mt-5">Order food at a single click and select all food to order at any poin in time and at ease and comfort</p>
                    </div>
                </div>
                <div className="bg-white py-16 px-10 flex flex-col items-center gap-7">
                    <img src={DeliveryMan} alt="" className='w-16' />
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">fast delivery</h1>
                        <p className="text-sm mt-5">food delivery fst and reliable and get delivered at deliivery tinme and location any day any time</p>
                    </div>
                </div>
                <div className="bg-white py-16 px-10 flex flex-col items-center gap-7">
                    <img src={Quality} alt="" className='w-[100px]' />
                    <div className="text-center">
                        <h1 className="font-bold text-2xl">100% quality</h1>
                        <p className="text-sm mt-5">We provide quality food for you and your loved ones for health and so onnnnnn and for wellness</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs