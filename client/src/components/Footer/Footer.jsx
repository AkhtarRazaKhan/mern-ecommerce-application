import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="py-12 bg-[#fafafa]  ">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-9 ">

          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
            <h3 className="text-[16px] font-[600] mt-3"> Free Shipping</h3>
            <p className="text-[13px] font=[500]"> For all Orders $100</p>

          </div>

          <div className="col2 flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
            <h3 className="text-[16px] font-[600] mt-3"> Free Shipping</h3>
            <p className="text-[13px] font=[500]"> For all Orders $100</p>

          </div>

          <div className="col3 flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[39px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
            <h3 className="text-[16px] font-[600] mt-3"> Free Shipping</h3>
            <p className="text-[13px] font=[500]"> For all Orders $100</p>

          </div>

          <div className="col4 flex items-center justify-center flex-col group w-[15%]">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
            <h3 className="text-[16px] font-[600] mt-3"> Free Shipping</h3>
            <p className="text-[13px] font=[500]"> For all Orders $100</p>

          </div>

          <div className="col5 flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
            <h3 className="text-[16px] font-[600] mt-3"> Free Shipping</h3>
            <p className="text-[13px] font=[500]"> For all Orders $100</p>

          </div>




        </div>

        {/* About Footer */}

        <div className="footer flex pt-12 pl-9 border-t border-[rgba(0,0,0,0.1)]  ">
            <div className="col1 w-[25%]  border-r border-[rgba(0,0,0,0.1)]">
                <h2 className="text-[20px] font-[600] mb-4"> Contact Us</h2>
                <p className="text-[13px] font-[400] pb-4"> Shopping - MEGA SuperStore<br/>
                    Indore India
                </p>
                <Link className="link text-[13px]" to="/"> sales@yourcompany.com</Link>

                <span className="text-[22px] font-[600] block w-full mt-3 mb-4 text-primary"> 9874561230
                </span>

                <div className="flex items-center gap-2">
                  <IoChatboxOutline className="text-[40px] text-primary"/>
                  <span className="text-[16px] font-[600]" > Online Chat <br/>
                   Get Expert Help </span> 

                </div>



            </div>

            <div className="col2 w-[20%] pl-8">
              <h2 className="text-[18px] font-[600] mb-4"> Products</h2>

              <ul className="list">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Prices Drop </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> New Products </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Best Sales </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Contact Us </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Stores </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-1">
                  <Link to="/" className="link "> Sitemap </Link> 
                </li>

              </ul>

            </div>

             <div className="col3 w-[20%]">
              <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>

              <ul className="list">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Prices Drop </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> New Products </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Best Sales </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Contact Us </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link "> Stores </Link> 
                </li>

                <li className="list-none text-[14px] w-full mb-1">
                  <Link to="/" className="link "> Sitemap </Link> 
                </li>

              </ul>

            </div>

            <div className="col4 w-[30%]">
              <h2 className="text-[18px] font-[600] mb-4"> Subscribe to newsletter</h2>
                <p className="text-[13px] font-[400] "> Subscribe to our latest newspaper to get news about special discounts.
                    Indore India
                </p>
              <form className="mt-3">
                <input
                type="text"
                className="w-full h-[40px] mt-4 border border-gray-300 outline-none px-4 rounded-sm mb-3 focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all duration-200"
                placeholder="Your Email Address"
              />
                <Button className="btn-org"> Subscribe </Button>

                 <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the temrs and conditons and the privacy policy" />

              </form>

    
            </div>

        </div>

      </div>

    </footer>

    {/* BottomStrip Footer */}

    <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
      <div className="container flex items-center justify-between">

        <ul className="flex items-center justify-between gap-4">
         <li>
        <a
          href="https://facebook.com"
          target="_blank"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          <FaFacebookF size={18} />
        </a>
      </li>

       <li>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-red-600 hover:text-white transition-colors duration-200"
      >
        <AiOutlineYoutube size={20} />
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-pink-500   hover:text-white transition-colors duration-200"
      >
        <FaInstagram size={20} />
      </a>
    </li>

      

          

         
        </ul>

        <p className="text-[13px] text-center"> © 2025 -Ecommerce developed By Akhtar Raza </p>

      </div>

    </div>

    </>

  
  );
};

export default Footer;
