import React from 'react'
import { EasyToOrder, DeliveryMan, Quality } from '../Assets'

const WhyChooseUs = () => {
  return (
    <>
        <div className="w-full px-5 lg:w-10/12 lg:mx-auto my-16" id='whychooseus'>
            <h1 className="text-primary-500 text-center font-bold text-3xl">Why choose us</h1>
            <p className="text-center text-lg">This is what makes our product different</p>

            <div className="w-full bg-primary-50 mt-10 grid gap-11 py-11 px-8 lg:grid-cols-3 lg:py-11">
                <div className="bg-white py-16 px-5 flex flex-col lg:items-center lg:px-10 gap-7">
                    <img src={EasyToOrder} alt="" className='w-16' />
                    <div className="lg:text-center">
                        <h1 className="font-bold text-2xl">Easy to order</h1>
                        <p className="text-lg lg:text-sm mt-5">Order food at a single click and select all food to order at any poin in time and at ease and comfort</p>
                    </div>
                </div>
                <div className="bg-white py-16 px-5 flex flex-col lg:items-center lg:px-10 gap-7">
                    <img src={DeliveryMan} alt="" className='w-16' />
                    <div className="lg:text-center">
                        <h1 className="font-bold text-2xl">fast delivery</h1>
                        <p className="text-lg lg:text-sm mt-5">food delivery fst and reliable and get delivered at deliivery tinme and location any day any time</p>
                    </div>
                </div>
                <div className="bg-white py-16 px-5 flex flex-col lg:items-center lg:px-10 gap-7">
                    <img src={Quality} alt="" className='w-[100px]' />
                    <div className="lg:text-center">
                        <h1 className="font-bold text-2xl">100% quality</h1>
                        <p className="text-lg lg:text-sm mt-5">We provide quality food for you and your loved ones for health and so onnnnnn and for wellness</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs