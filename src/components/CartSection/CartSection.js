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
    <div className='p-4'>
      <h1 className='text-3xl font-bold'>Your addtoCart</h1>
      {addtoCart.length === 0 ? (
        <p>Your addtoCart is empty!</p>
      ) : (
        <div className='mt-4'>
          {addtoCart.map((item,index) => (
            <div key={item.id} className='flex justify-between items-center p-4 border-b w-full'>
              <div className='w-1/2'>
                <img
                  className='w-20 h-20'
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className='flex justify-between w-1/2'>
                <h2 className='text-xl font-bold'>{item.name}</h2>
                <p>{`$${item.price}`}</p>
                <span onClick={removeHandeler(index)}><FaTrashAlt /></span>
              </div>
              
            </div>
          ))}
          <div>
                <h1>Total</h1>
                <p>{`$${addtoCart.reduce((acc, curr) => acc + curr.price, 0)}`}</p>
              </div>
        </div>
      )}
    </div>
  );
};

export default CartSection;
