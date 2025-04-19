import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Nav from "./Component/Nav";
import Connect from "./pages/Connect"
import Footer from "./Component/Footer";
import Search from "./Component/Search";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Productdetails from "./pages/Productdetails";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return ( 
    <div className="px-8 flex flex-col min-h-screen">
      <ToastContainer />
       <Nav/>
       <Search/>
       <div className="flex-1">
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/collection" element={<Collection/>}/>
         <Route path="/connect" element={<Connect/>}/>
         <Route path="/products/:productId" element={<Productdetails/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/place-order" element={<PlaceOrder/>}/>
         <Route path="/orders" element={<Orders/>}/>
       </Routes>

       </div>
       
       <Footer/>
       
    </div>
   );
}

export default App;


