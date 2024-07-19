// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center p-4 md:p-8"
        style={{ backgroundImage: `url('/background.avif')`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="text-black text-center italic max-w-full md:max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Happy to Help Foundation</h1>
          <p className="text-base md:text-lg mb-4">An esteemed organization looking forward to change the world</p>
          <Link to={"/home"}>
            <button
              type="button"
              className="text-white mt-4 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


