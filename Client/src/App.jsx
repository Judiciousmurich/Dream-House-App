
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Buy from './pages/buy/Buy'
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';

import Register from './pages/register/Register';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { Context } from './context/Context';
import NewListing from './pages/new/NewListing';

const App = () => {
  // const {user} = useContext(Context);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/newlisting" element={ <NewListing /> } />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
