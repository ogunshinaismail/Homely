import React from 'react'

const About = ({setShowAbout}) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
        <div className="relative w-auto my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg w-11/12 mx-auto lg:w-[645px] md:w-[600px] relative flex flex-col bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className='mt-6 mx-6'>
                <div className='mb-4'>
                  <h1 className='font-bold text-4xl lg:text-5xl'>About us</h1>
                  <div className="h-1 w-3/12 bg-primary-600 mt-1"></div>
                </div>
                <p className="text-xl lg:leading-9 lg:text-2xl overflow-y-scroll scroll-smooth max-h-72">I make delicious healthy meals for busy people who want to enjoy home made food without the hassle of cooking. Why would you cook when you don't have to? The Hot Plate makes it easy to eat your favorite home cooked food anywhere you want. You deserve to eat great food, whether you're at home or on the go. We'll help you find unique meals wherever you are. With our app, you never have to settle for unhealthy, expensive takeaway food again.</p>
              </div>
              
              {/*footer*/}
              <div className="mx-6 pb-6">
                <div className="flex items-center justify-end mt-6">
                  <button
                    className="bg-primary-600 px-10 py-2 text-white rounded-md mr-3 hover:bg-primary-700 outline-none"
                    type="button"
                    onClick={() => setShowAbout(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About