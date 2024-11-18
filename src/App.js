
import './App.css';
import CartSection from './components/CartSection/CartSection';
import Details from './components/DetailPage/Details';
import LandingPage from './Screen/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<Details/>}/>
        {/* <Route path="/cart" element={<CartSection/>}/> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
