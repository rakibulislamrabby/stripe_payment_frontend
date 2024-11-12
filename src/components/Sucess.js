import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white  rounded-lg p-8 md:p-16 text-center">
        <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2  rounded-md shadow-md "
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
