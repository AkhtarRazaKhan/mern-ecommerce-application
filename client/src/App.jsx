import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {BrowserRouter ,Routes ,Route,} from "react-router-dom"
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./Pages/ProdcutDetails/ProductDetails";
import { createContext } from "react";
import { useState } from "react";
import ProDetailsContent from "./components/ProDetailsContent/ProDetailsContent";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import toast, { Toaster } from 'react-hot-toast';

// MUI 

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import CartPanel from "./components/CartPanel/CartPanel";
import Cart from "./Pages/Cart/CartPage";
import Verify from "./Pages/Verify/Verify";
import Drawer from "@mui/material/Drawer";
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Checkout from "./Pages/Checkout/Checkout";






const MyContext = createContext();



function App() {

// Product Modal
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState('lg')
  const [fullWidth, setDullMaxWidth] = useState(true)


    // Cart Panel Drawer
  const [openCartPanel, setOpenCartPanel] = useState(false);

  //Check User login or not
  const [isLogin, setIsLogin] = useState(false)


  // Product Modal
  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  // Cart Panel
  const toggleCartPanel = (newOpen)=> {
    setOpenCartPanel(newOpen)
  }

  // React Hot Toast (notifications)
  const openAlertBox = (status, msg)=>{
    if(status==="success"){
        toast.success(msg)
      }
      if(status ==="error") {
        toast.error(msg)

      }
  }


  // useContext
  const values ={
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin

  }

  


  return (
    <>
    <BrowserRouter>
    
    <MyContext.Provider value={values}>  
          

     <Header/>
     <Routes>
      <Route
       path={"/"}
       exact={true}
       element={<Home/>}/>

      <Route
       path={"/productListing"}
       exact={true}
       element={<ProductListing/>}/>

      <Route 
       path={"/product/:id"}
       exact={true} 
       element={<ProductDetails/>}/>

       <Route 
       path={"/login"}
       exact={true} 
       element={<Login/>}/>

       <Route 
       path={"/register"}
       exact={true} 
       element={<Register/>}/>

       <Route 
       path={"/cart"}
       exact={true} 
       element={<Cart/>}/>

       <Route 
       path={"/verify"}
       exact={true} 
       element={<Verify/>}/>

       <Route 
       path={"/forgotpassword"}
       exact={true} 
       element={<ForgotPassword/>}/>

       <Route 
       path={"/checkout"}
       exact={true} 
       element={<Checkout/>}/>

       <Route 
       path={"/myaccount"}
       exact={true} 
       element={<MyAccount/>}/>

       <Route 
       path={"/mylist"}
       exact={true} 
       element={<MyList/>}/>

       <Route 
       path={"/myorders"}
       exact={true} 
       element={<MyOrders/>}/>

     </Routes>
     <Footer/>

    </MyContext.Provider>
     
    </BrowserRouter>

    <Toaster/>

    {/* //Dialog from MUI for Product Full View */}

     <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="ProductDetailsModal"
      >
      
      
    
      </Dialog>

      {/* Cart Panel Drawer */}

      <Drawer open={openCartPanel} onClose={()=> toggleCartPanel(false)}
       anchor={"right"}
       className="cartPanel"
       >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b
         border-[rgba(0,0,0,0.1)]">
          <h4> Shopping Cart  </h4>
          <IoCloseSharp className="text-[20px] cursor-pointer" onClick={()=> setOpenCartPanel(false)}/>
        </div>

        {/* CartPanel Data */}
        <CartPanel/>

      </Drawer>

    </>

  );
}

export default App;

export {MyContext}
