import React from 'react'

function Login() {
  // react hook form dalna hai 
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 m-2">
    <div className="flex justify-center w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 bg-white p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Log in</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Welcome to Login page</h2>
        <p className="text-gray-600 mb-6">Sign into your account</p>
        <form>
          <input 
            type="number || email" 
            placeholder="Phone or Email address" 
            required 
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200">
            Log In
          </button>
          <a href="#" className="block text-blue-600 text-sm mt-4 hover:underline">Forgot password?</a>
        </form>
      </div>
      
      {/* Right Section */}
      {/* <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center"> */}
        {/* You can add your background image or illustration here */}
      {/* </div> */}
    </div>
  // </div>

  )
}

export default Login;
