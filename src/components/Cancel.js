import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 text-center">
        <h2 className="text-2xl font-semibold mb-2">Payment Canceled</h2>
        <p className="text-gray-600 mb-6">
          Your payment was canceled. If this was a mistake, you can try again.
        </p>
        <button
          onClick={() => navigate('/cart')}
          className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Cancel;
