import React, { useContext } from 'react';
import { DataContext } from "../../context/DataContext";
import { FaTrashAlt } from "react-icons/fa";

const CartSection = () => {
  const { addtoCart, removeHandeler } = useContext(DataContext);

  // Check if addtoCart is defined and has products in it
  if (!addtoCart) {
    return <p>Loading addtoCart...</p>;  // Or show an empty addtoCart message if addtoCart is undefined
  }

  return (
    <div className=''>
      <h1 className='text-3xl font-bold capitalize text-gray-500 underline'>Your addto Cart</h1>
      {addtoCart.length === 0 ? (
        <div className='flex w-[80vw] h-[80vh] justify-center items-center '><p className='uppercase text-xl text-red-700'>Your addtoCart is empty!</p></div>
      ) : (
        <div className='mt-4'>
          {addtoCart.map((item,index) => (
            <div key={item.id} className='flex justify-between items-center sm:p-4 p-0 border-b w-full'>
              <div className='w-1/2'>
                <img
                  className='w-20 h-20'
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className='flex justify-between items-center sm:gap-0 gap-2 w-1/2'>
                <h2 className='text-xl font-bold'>{item.name}</h2>
                <p>{`$${item.price}`}</p>
                <span onClick={() => removeHandeler(item.id)}><FaTrashAlt /></span>
              </div>
              
            </div>
          ))}
          <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-semibold text-gray-500'>Total</h1>
                <p className='text-2xl font-semibold text-gray-500'>{`$${addtoCart.reduce((acc, curr) => acc + curr.price, 0)}`}</p>
              </div>
        </div>
      )}
    </div>
  );
};

export default CartSection;
