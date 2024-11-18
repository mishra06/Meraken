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
  const [addtoCart, setAddToCart] = useState([]); // Cart state

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

  // Load cart from local storage when the app loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setAddToCart(savedCart); // Set cart state to saved cart
  }, []);

  // Save cart to local storage whenever the cart state changes
  useEffect(() => {
    if (addtoCart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(addtoCart)); // Save cart to local storage
    }
  }, [addtoCart]);

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
      setData(filtered);   // Reset the original data for filtered items
    }
  };

  // Generate unique categories
  const uniqueCategories = ['All', ...new Set(originalData.map(product => product.category))];

  // Add to cart functionality
  const addToCartfun = (product) => {
    setAddToCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart; // If already in cart, do nothing
      }
      return [...prevCart, product]; // Add product to cart
    });
  };

  // Remove item from cart
  const removeHandeler = (productId) => {
    setAddToCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return updatedCart; 
    });
  };

  const total = addtoCart.length;
  console.log(total,"total length");

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        InputHandler,
        input,
        uniqueCategories,
        categoryFilter,
        Category,
        addToCartfun,
        addtoCart,
        removeHandeler,
        total
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
