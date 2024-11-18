import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from "../../context/DataContext";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();  // Use the navigate hook to navigate to the previous page
    const { id } = useParams(); // Extract product ID from URL
    const { data, addToCartfun } = useContext(DataContext);

    const product = data.find((item) => item.id === Number(id));

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className=' flex sm:flex-row flex-col justify-center items-center w-[100%]  h-[90vh] sm:p-8 p-0 gap-8'>
          <div className='absolute top-20 left-5 cursor-pointer' onClick={() => navigate("/")}><FaArrowCircleLeft /></div>
            <div className='sm:h-full h-1/2 sm:w-1/2 w-full flex justify-center items-center '>
              <img className=' sm:h-[80vh] h-full  w-[90%]' style={{ boxShadow: '4px 4px 10px rgba(144, 238, 144, 1.1)' }} src={product.image} alt={product.name} />
            </div>
            <div className='sm:h-full h-1/2 sm:w-1/2 w-[90%]  flex flex-col justify-items-start gap-4'>
              <div className='flex flex-col gap-2 w-full sm:w-full'>
                  <h1 className='text-3xl font-bold'>{product.name}</h1>
                  <h2 className='text-2xl font-bold'>{`$${product.price}`}</h2>
                  <p className='text-2xl '>{product.description}</p>
              </div>
              <div className='flex h-16 items-center  p-2'>
                <button className='p-2 text-center bg-slate-300 h-4/5' onClick={() => addToCartfun(product)} style={{ boxShadow: '4px 4px 10px rgba(128, 128, 128, 0.5)' }}>Add to Cart</button>
              </div>
              
            </div>
        </div>
    );
};

export default Details;
