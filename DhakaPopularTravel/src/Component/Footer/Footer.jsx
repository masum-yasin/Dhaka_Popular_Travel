import React from 'react';
// React Icon Here//
import { FaYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
           <footer className='container mx-auto mt-10 p-4'>
             <section >
                <div className=' mt-5 text-center'>
                    <h1 className='text-xl mt-4 font-extrabold  text-emerald-500'>Let's Have a Chat</h1>
                   <pre className='text-sky-900'>Please Chat Now Available</pre>
                   <input type="text"  className='mt-4 text-center' placeholder='Send Your Message'/>
                </div>


                <div className="flex justify-between gap-36 mt-8 row ">
                  <div className="col-lg-3">
                    <h5>About Sephora</h5>
                    <small>About Sephora<br />
                      Caroors<br />
                      Sephora Stands Social impost<br />
                      Affilates<br />
                      Supply Chan Transparency<br />
                      SHamap<br />
                      Sophora Global Sites<br />
                    </small>
                  </div>
                <div className="col-lg-3">
                  <h5>My Sephora</h5>
                  <small>My Account<br />Order Status<br />Beauty Insider<br />Revards Bazer<br />Loves<br />Playl by Sephora-Subcribe Now<br />Flash Unlimited Shipping</small>
                </div>
                <div className="col-lg-3">
                  <h5>Help &amp; FAQs</h5>
                  <small>Online Orderning<br />Shipping<br />Billng<br />Returns &amp; Exchanges <br /> International Shipping<br />Customer Services<br />Contact Us</small>
                </div>

                <div className="flex gap-4 col-lg-3 mt-24">
                <div className='text-2xl'><FaYoutube /></div>
                <div className='text-2xl'><FaSquareWhatsapp /></div>
                <div className='text-2xl'><FaTwitter /></div>
                <div className='text-2xl'><IoManSharp /></div>
                <div className='text-2xl'><FaFacebook /></div>
                <div className='text-2xl'><FaFacebookMessenger /></div>
                </div>
  
          </div>
        </section>
                    <div className='text-center	mt-4'>
                    <a className="font-extrabold  text-emerald-500 text-xl" href="https://github.com/masum-yasin" target="_blank">github-link By Md Mashum Hossain</a>
                    </div>
            </footer> 
        </>
    );
};

export default Footer;