import React, { useContext } from 'react';
import { DataContext } from "../../context/DataContext";
import Card from '../card/Card';

const Contant = () => {
  const { input, InputHandler, Category, uniqueCategories, categoryFilter } = useContext(DataContext);

  return (
    <div className='w-full flex flex-wrap h-full'>

      {/* Search and Filter Section */}
      <div className='w-full justify-around items-center h-20 border-b-2 border-black flex '>

        {/* ****************** Search Input **************} */}
        <input
          className='border-b-2 border-black h-3/5 w-[20vw] p-2 outline-none font-medium'
          type="text"
          value={input}
          placeholder='Search By Name...!'
          onChange={InputHandler} 
        />

        
        {/* {****************** Category Filter **************} */}

        <select
          className='h-3/5 w-[20vw] border-b-2 border-black outline-none font-medium'
          value={Category}
          onChange={(e) => categoryFilter(e.target.value)} // Pass selected category to categoryFilter
        >
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* {****************** Card **************} */}
      <Card />
    </div>
  );
};

export default Contant;
