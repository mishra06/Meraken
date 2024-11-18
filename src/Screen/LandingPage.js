import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <div className="App flex w-[100%] h-[100vh] flex-col justify-center items-center">
      {/* Header Section */}
      <div className='flex w-full justify-around gap-10 items-center h-[10vh] '>
        <h1 className='text-black-800 font-bold text-3xl uppercase cursor-pointer' onClick={() => navigate("/")}>Product Catalog</h1>
        <button className='h-[5vh] w-[10vw] mt-3 bg-black text-white font-bold rounded-md' onClick={() => navigate("/cart")}>Cart</button>
      </div>
      

      {/* Content Section */}
      <div className='h-[90vh] w-[85%]'>
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
};

export default LandingPage;
