import React, { useContext } from 'react';
import { DataContext } from "../../context/DataContext";
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const { data, loading } = useContext(DataContext);
    const navigate = useNavigate(); // Hook for navigation

    const DetailsHandeler = (id) => {
        navigate(`/${id}`); // Navigate to dynamic route
    };

    return (
        <div className='flex flex-wrap w-full justify-center mt-3 gap-7'>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((product) => (
                        <div className='flex flex-col h-[350px] w-full sm:w-[22%] transform transition-transform duration-300 hover:scale-105' key={product.id}>
                            <div className='h-4/6 w-full object-cover'>
                                <img className='h-full w-full' src={product.image} alt="" />
                            </div>
                            <div className='flex justify-around h-1/6 items-center border-b-2 bg-slate-100 border-slate-400'>
                                <h2>{product.name}</h2>
                                <h2>{`$${product.price}`}</h2>
                            </div>
                            <div className='flex justify-center h-1/6 items-center bg-slate-100'>
                                <button
                                    className='px-4 bg-sky-700 h-4/5'
                                    onClick={() => DetailsHandeler(product.id)} // Pass product ID
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Card;
