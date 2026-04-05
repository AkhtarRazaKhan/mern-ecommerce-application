import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import { createContext, useState  } from "react"
import Login from "./Pages/Login-Signup/Login"
import ProductList from "./Pages/Product/ProductList"

import React from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io"
import Slide from '@mui/material/Slide';
import AddProduct from "./Pages/Product/addProduct"
import HomeSliderBanners from "./Pages/HomeSliderBanners/HomeSliderBanners"
import AddHomeSlide from "./Pages/HomeSliderBanners/AddHomeSlide"
import AddCategoy from "./Pages/Category/AddCategory"
import CategoryList from "./Pages/Category/CategoryList"
import UsersList from "./Pages/UsersList/UsersList"
import Orders from "./Pages/Orders/Orders"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"
import Verify from "./Pages/Verify/Verify"


// From Mui for Full Screeen dailog addproduct
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const MyContext =createContext();

function App() {
  
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false )

  // Add Product (full screen dailog) from mui
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open:false,
    model:''
  })


  const router = createBrowserRouter([

    // this is for / 
    {
      path:"/",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <Dashboard/>
            </div>

        

          </div>
        </section>
        </>
      )
    },

    // this is login route

  {
    path: "/login",
    exact: true,
    element: (
      <>
      <Login/>
      </>
    )
  },

  //  ProductList
   {
      path:"/productlist",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <ProductList/>
            </div>



          </div>
        </section>
        </>
      )
    },

  // HomeSlider

     {
      path:"/homeSlider",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <HomeSliderBanners/>
            </div>

        

          </div>
        </section>
        </>
      )
    },


  //Category
 {
      path:"/categorylist",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <CategoryList/>
            </div>

        

          </div>
        </section>
        </>
      )
    },


// Users

   {
      path:"/userslist",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <UsersList/>
            </div>

        

          </div>
        </section>
        </>
      )
    },

// Orders

 {
      path:"/myorders",
      exact:true,
      element: (
        <>
        <section className="main">
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper overflow-hidden ${isSidebarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all]`}>
              <Sidebar/>
            </div>
            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%] ': 
             'w-[82%]'} transition-all`}>
              <Orders/>
            </div>

        

          </div>
        </section>
        </>
      )
    },


//Forgotpassword

 {
    path: "/forgotpassword",
    exact: true,
    element: (
      <>
      <ForgotPassword/>
      </>
    )
  },


// Verify

 {
    path: "/verify",
    exact: true,
    element: (
      <>
      <Verify/>
      </>
    )
  },

  

  ])

  // Sidebar
   const values ={
    isSidebarOpen,
    setisSidebarOpen,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    isLogin,
    setIsLogin

  }
  
  return (
    <>
    <MyContext.Provider value={values}> 
     <RouterProvider router={router}/>


  {/* Full screeen dailog from Mui For add product */}
  <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={()=> setIsOpenFullScreenPanel({
          open: false
        })}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=> setIsOpenFullScreenPanel({
                  open: false
                })}
              aria-label="close"
            >
              <IoMdClose className="text-gray-800" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

           <span className="text-gray-800">  {isOpenFullScreenPanel?.model} </span> 

            </Typography>
            {/* <Button autoFocus color="inherit"
             onClick={()=> setIsOpenFullScreenPanel({
                    open: false
                  })}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
         
         {
          isOpenFullScreenPanel?.model === "Add Product" && <AddProduct/>
         }

          
      </Dialog>

    </MyContext.Provider>
    </>
  )
}

export {MyContext}

export default App
