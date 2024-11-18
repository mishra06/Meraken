import './App.css';
import CartSection from './components/CartSection/CartSection';
import Details from './components/DetailPage/Details';
import LandingPage from './Screen/LandingPage';
import ScreenPage from './Screen/ScreenPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page with Nested Routes */}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<ScreenPage />} /> 
          <Route path=":id" element={<Details />} />
          <Route path="/cart" element={<CartSection />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
