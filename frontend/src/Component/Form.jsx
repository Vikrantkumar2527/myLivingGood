import React, { useState } from 'react';
 const currentUrl = window.location.href;
function Form() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-medium text-gray-600 mb-8">Schedule your visit</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="fc6f7331-c9cc-4533-bc29-65835d73b541"></input>
          <div className='w-[300px] md:w-[400px]'>
            {/* Visit Type Radio Buttons */}
            <div className="flex gap-8 mb-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="visitType"
                  value="campus"
                  className="w-4 h-4 text-blue-600 mr-3"
                />
                <span className="text-gray-700">Schedule visit</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="visitType"
                  value="video"
                  className="w-4 h-4 text-blue-600 mr-3"
                />
                <span className="text-gray-700">Video tour</span>
              </label>
            </div>

            {/* Name Input */}
            <div className="mb-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full p-4 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-5">
              <div className="flex w-full">
                <div className="bg-gray-200 border-2 border-r-0 border-gray-200 rounded-l-lg px-4 py-4 text-gray-600 font-medium">
                  +91
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                 required
                  className="flex-1 p-4 border-2 border-l-0 border-gray-200 rounded-r-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="mb-5 relative">
              <input
                type="date"
                name="date"
                placeholder="Select Date"
                required
                className="w-full p-4 pr-12 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  required
                  className="w-5 h-5 text-blue-600 mt-1 mr-3 rounded"
                />
                <span className="text-gray-600 text-sm leading-relaxed">
                  I have read and agreed to the{' '}
                  <a href="#" className="text-orange-400 underline hover:text-orange-500">
                    terms & conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-400 underline hover:text-orange-500">
                    privacy policy
                  </a>
                  . I hereby confirm to proceed.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              
              type="submit"
              
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              Submit
            </button>
          </div>
          <input type="hidden" name="redirect" value={currentUrl}></input>
        </form>
      </div>

    </div>

  );
}

export default Form;