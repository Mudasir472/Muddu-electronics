import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Home.jsx"
import Navbar from "./Nav-Footer/Navbar.jsx"
import Footer from "./Nav-Footer/Footer.jsx"
import Contact from "./Nav-pages/Contact.jsx"
import About from "./Nav-pages/About.jsx"
import Products from "./Nav-pages/Products.jsx";
import Header from "./Nav-Footer/Header.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Signup from './LoginSignup/Signup.jsx'
import Login from "./LoginSignup/Login.jsx"
import Mobiles from "./browseCatagories/Mobiles.jsx";
import Keyboards from "./browseCatagories/Keyboards.jsx";
import Watches from "./browseCatagories/Watches.jsx";
import Computers from "./browseCatagories/Computers.jsx";
import Cameras from "./browseCatagories/Cameras.jsx";
import Blog from "./Nav-pages/Blog.jsx";
import Logout from "./LoginSignup/Logout.jsx";
import Dashboard from "./Nav-Footer/Dashboard.jsx";
import CataDisplay from "./browseCatagories/Cata.jsx";

//catagories routes


function App() {
  const categoryData = ['mobiles', 'keyboards', 'watches', 'computers','cameras'];
  return (
    <>
      <Router>
        <ToastContainer/>
        <Header/>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            

            {/* //catagories */}
            <Route path="/mobiles" element={<Mobiles/>} />
            <Route path="/keyboards" element={<Keyboards/>} />
            <Route path="/watches" element={<Watches/>} />
            <Route path="/computers" element={<Computers/>} />
            <Route path="/cameras" element={<Cameras/>} />
            
            {/* <Route
              path="/products/:category"
              element={<CataDisplay category={"camera"} />}
            />
             */}


            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
