import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const DataContext = createContext(null);

// Provider component
export const DataProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState([]); // Store original dataset
  const [data, setData] = useState([]); // Displayed dataset
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [Category, setCategory] = useState('');

  // Load the JSON file
  useEffect(() => {
    fetch('/Data.json') 
      .then((response) => response.json())
      .then((jsonData) => {
        setOriginalData(jsonData); 
        setData(jsonData); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
        setLoading(false);
      });
  }, []);

  // Handle search input
  const InputHandler = (e) => {
    const newVal = e.target.value;
    setInput(newVal);

    if (newVal) {
      const filtered = originalData.filter(item => 
        item.name.toLowerCase().includes(newVal.toLowerCase())
      );
      setData(filtered);
    } else {
      setData(originalData); // Reset to original data if input is cleared
    }
  };

  // Handle category filtering
  const categoryFilter = (category) => {
    setCategory(category);

    if (category === 'All') {
      setData(originalData); // Reset to original data for 'All'
    } else {
      const filtered = originalData.filter(item => item.category === category);
      setData(filtered);   // Reset the original data for filtered item 
    }
  };

  // Generate unique categories
  const uniqueCategories = ['All', ...new Set(originalData.map(product => product.category))];

  return (
    <DataContext.Provider value={{ data, loading, InputHandler, input, uniqueCategories, categoryFilter, Category }}>
      {children}
    </DataContext.Provider>
  );
};
