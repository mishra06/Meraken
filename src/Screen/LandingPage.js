import React, { useContext } from 'react';
import { DataContext } from "../context/DataContext";
import { Outlet } from 'react-router-dom'; // Import Outlet
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const { total } = useContext(DataContext);

  const navigate = useNavigate();
  return (
    <div className="App flex w-[100%] h-[100vh] flex-col justify-center items-center">
      {/* Header Section */}
      <div className='flex w-full justify-around gap-10 items-center h-[10vh] '>
        <h1 className='text-black-800 font-bold sm:text-3xl text-2xl uppercase cursor-pointer' onClick={() => navigate("/")}>Product Catalog</h1>
        <button className='h-[5vh] sm:w-[10vw] w-[20%] mt-3 bg-black text-white font-bold rounded-md' onClick={() => navigate("/cart")}>Cart <span><sup>{total}</sup></span> </button>
      </div>
      

      {/* Content Section */}
      <div className='h-[90vh] w-[85%]'>
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
};

export default LandingPage;
