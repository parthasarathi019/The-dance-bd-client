//eslint-disable-next-line
import React from 'react';
import logo from '../../assets/local_Img/Web_Logo/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
              {/* <div className="text-dark">
                <svg viewBox="0 0 700 40" width="100%" height="100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }}></stop>
                        </linearGradient>
                    </defs>
                    <path d="M0,0 c0,-30 230,-12 350,-1 c50,5 0,-20 350,-5 v60 h-0z" fill="url(#gradient)"></path>
                </svg>
            </div> */}
            <div className="text-dark">
                <svg viewBox="0 0 700 100" width="100%" height="100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }}></stop>
                        </linearGradient>
                    </defs>
                    <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="url(#gradient)"></path>
                </svg>
            </div>
            <div className='flex text-white md:h-[16em] flex-col md:flex-row'>
                <section className='bg-[#1f2937] md:w-[50%] py-[10px] md:py-0 flex  pl-5 md:pl-0 md:justify-end md:pr-[5em]'>
                    <div className='md:pt-9'>
                        <img className=' w-[100px]' src={logo} alt="" />
                        <p className='md:text-[2em] text-[1.4em] font-[500] pb-3'>CONTACT US</p>
                        <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Section-C,PSC Street, Mirpur-13, Bangladesh</p>
                        <p className='text-[0.96em] md:text-[1.25em] font-[500]'>+880 1925 172417</p>
                        <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </section>
                <section className='bg-[#111827] md:w-[50%]  py-[10px] md:py-0 mt-[.5px] md:mt-0 pl-5 md:pl-[5em] '>
                    <div className='md:pt-9'>
                        <p className='md:text-[2em] text-[1.4em] font-[500] pb-3'>Follow US</p>
                        <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Join us on social media</p>
                        <div className='flex gap-x-4'>
                            <FaFacebookF size={23}></FaFacebookF>
                            <FaTwitter size={23}></FaTwitter>
                            <FaInstagram size={23}></FaInstagram>
                        </div>
                    </div>
                </section>
            </div>
            <div className='bg-gradient-to-r from-[#1f2937] to-[#111827] flex justify-center items-center h-[4.375em] md:text-[1.25em] text-[.81em] font-[500] text-white'>Copyright © The•Dance•Studio. All rights reserved.</div>
        </footer>
    );
};

export default Footer;