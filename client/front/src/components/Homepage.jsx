import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black to-white flex flex-col items-center justify-center text-black font-connectz"
    >
      <div className="p-10 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-white to-black">Connectz</span>
        </h2>
        <div className="flex flex-row space-x-4"> {/* Updated this line */}
          <Link to="/signup">
            <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-full shadow-lg transition duration-300">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-bold rounded-full shadow-lg transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
