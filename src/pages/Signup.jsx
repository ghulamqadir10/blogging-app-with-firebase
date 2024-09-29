import React from 'react'

function Signup() {
  return (
    <>
          <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">SignUp Form</h2>
        <form>
          {/* Username */}
          <div className="mb-4">
            <div className="flex items-center border rounded-md px-3">
              <i className=" text-gray-500"></i>
              <input 
                type="text" 
                placeholder="Enter Username" 
                className="w-full py-2 px-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <div className="flex items-center border rounded-md px-3">
              <i className="fas fa-envelope text-gray-500"></i>
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full py-2 px-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex items-center border rounded-md px-3">
              <i className="fas fa-lock text-gray-500"></i>
              <input 
                type="password" 
                placeholder="Create Password" 
                className="w-full py-2 px-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <div className="flex items-center border rounded-md px-3">
              <i className="fas fa-lock text-gray-500"></i>
              <input 
                type="password" 
                placeholder="Retype Password" 
                className="w-full py-2 px-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition duration-200">
            SignUp
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup;
